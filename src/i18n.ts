import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from './assets/langs/en/en.json';
import de from './assets/langs/de/de.json';
import it from './assets/langs/it/it.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend';

export const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  it: {
    translation: it,
  },
};

i18n
  .use(LanguageDetector)
  .use(LocalStorageBackend)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },

    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
