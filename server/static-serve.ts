import path from 'path';
import express from 'express';

/**
 * Sets up static file serving for the Express app
 * @param app Express application instance
 */
export function setupStaticServing(app: express.Application) {
  // Serve static files from the public directory
  app.use(express.static(path.join(process.cwd(), 'dist/public')));
  
  // Serve additional static paths explicitly to prevent path-to-regexp errors
  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'dist/public', 'index.html'));
  });
  
  // Handle all other client-side routes without using path patterns that could trigger path-to-regexp
  app.use((req, res, next) => {
    // Skip API routes
    if (req.path.startsWith('/api/')) {
      return next();
    }
    
    // Send the index.html for client-side routing
    res.sendFile(path.join(process.cwd(), 'dist/public', 'index.html'));
  });
}
