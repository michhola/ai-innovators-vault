import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { ThemeProvider } from '@/lib/ThemeContext';

import './index.css';
import './components/ui/dark-mode.css';

// Log environment info
console.log(`App running in ${import.meta.env.MODE} mode`);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
