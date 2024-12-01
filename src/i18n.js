// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your language files (en.json and ms.json)
import en from './locals/en.json';
import ms from './locals/ms.json';

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ms: {
      translation: ms,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if the translation is missing
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
