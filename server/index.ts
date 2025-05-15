import express from 'express';
import dotenv from 'dotenv';
import { setupStaticServing } from './static-serve.js';

// Load environment variables before any other code runs
dotenv.config();

const app = express();

// Body parsing middleware - increase limits for larger payloads
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// CORS middleware - set more permissive for development
app.use((req, res, next) => {
  // Allow all origins for development
  res.header('Access-Control-Allow-Origin', '*');
  
  // Allow a wide range of headers
  res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Frame-Options');
  
  // Allow all methods
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  
  // Allow credentials
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Help with iframes
  res.removeHeader('X-Frame-Options');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// Debug middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Proxy endpoint for n8n form requests - this can help with CORS issues
app.post('/api/form-proxy', express.json({ limit: '2mb' }), async (req, res) => {
  try {
    const formData = req.body;
    console.log('Received form data:', formData);
    
    // Forward to n8n if needed
    // const response = await fetch('https://aivault.app.n8n.cloud/form/...', {...})
    
    // For now just acknowledge receipt
    res.json({
      success: true,
      message: 'Form data received successfully',
      data: formData
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process form submission',
      error: error.message
    });
  }
});

// Simple endpoint for testing
app.get('/api/health', (req: express.Request, res: express.Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Handle unmatched API routes - avoids using wildcards that can trigger path-to-regexp errors
app.use('/api', (req: express.Request, res: express.Response) => {
  console.log(`Received unhandled API request: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ message: 'API endpoint not found' });
});

// Export a function to start the server
export async function startServer(port: number | string) {
  try {
    if (process.env.NODE_ENV === 'production') {
      setupStaticServing(app);
    }
    app.listen(port, () => {
      console.log(`API Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

// Start the server directly if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Starting server...');
  // Default to 3001 if PORT is undefined
  startServer(process.env.PORT || 3001);
}
