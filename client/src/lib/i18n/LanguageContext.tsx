import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, languageNames } from './translations';

// List of supported languages
export const supportedLanguages = Object.keys(translations);

// Default language
export const defaultLanguage = 'en';

// Type definitions
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string | any;
  languageNames: { [key: string]: string };
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: () => '',
  languageNames: languageNames || {} // Ensure languageNames is defined
});

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with the default language
  const [language, setLanguage] = useState(defaultLanguage);

  // Function to detect user's preferred language
  const detectUserLanguage = (): string => {
    try {
      // Browser language detection
      const browserLang = navigator.language.split('-')[0];
      
      // Check if the browser language is supported
      if (supportedLanguages.includes(browserLang)) {
        return browserLang;
      }
      
      // For now, just return the default language
      return defaultLanguage;
    } catch (error) {
      console.error('Error detecting user language:', error);
      return defaultLanguage;
    }
  };

  // Initialize the language on component mount
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('userLanguage');
      
      if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
        setLanguage(savedLanguage);
      } else {
        // Detect user's language
        const detectedLanguage = detectUserLanguage();
        setLanguage(detectedLanguage);
        
        // Save to localStorage
        localStorage.setItem('userLanguage', detectedLanguage);
      }
    } catch (error) {
      console.error('Error initializing language:', error);
      // Fallback to default language if there's an error
      setLanguage(defaultLanguage);
    }
  }, []);

  // Function to change language
  const changeLanguage = (lang: string) => {
    // Validate the language
    if (!lang || typeof lang !== 'string') {
      console.warn('Invalid language provided to setLanguage');
      return;
    }
    
    if (supportedLanguages.includes(lang)) {
      setLanguage(lang);
      try {
        localStorage.setItem('userLanguage', lang);
        // Optionally update the HTML lang attribute
        document.documentElement.lang = lang;
      } catch (error) {
        console.error('Error saving language preference:', error);
      }
    } else {
      console.warn(`Language ${lang} is not supported`);
    }
  };

  // Translation function
  const t = (key: string): string | any => {
    try {
      if (!key) return '';
      
      // Split the key by dots to access nested properties
      const keys = key.split('.');
      let result = translations[language] || translations[defaultLanguage];
      
      for (const k of keys) {
        if (result && result[k] !== undefined) {
          result = result[k];
        } else {
          // If key not found, fall back to English
          let fallback = translations[defaultLanguage];
          for (const fallbackKey of keys) {
            if (fallback && fallback[fallbackKey] !== undefined) {
              fallback = fallback[fallbackKey];
            } else {
              return key; // Key not found even in fallback
            }
          }
          return fallback;
        }
      }
      
      return result;
    } catch (error) {
      console.error(`Translation error for key ${key}:`, error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: changeLanguage, 
        t,
        languageNames: languageNames || {} // Ensure languageNames is defined
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
