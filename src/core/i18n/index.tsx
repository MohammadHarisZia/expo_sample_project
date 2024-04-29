import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import { resources } from './resources';
import { getLanguage } from './utils';
export * from './utils';

// Is it a RTL language?
export const isRTL: boolean = i18n.dir() === 'rtl';

import { getLocales } from 'expo-localization';

async function initializeI18n() {
  const lang = await getLanguage();
  const deviceLanguage = getLocales()[0]?.languageCode;
  // Check if lang is null before assigning it to lng
  const lng = lang || (deviceLanguage !== null ? deviceLanguage : 'en');

  i18n.use(initReactI18next).init({
    resources,
    lng: lng,
    fallbackLng: 'en',
    compatibilityJSON: 'v3', // By default React Native projects does not support Intl

    // allows integrating dynamic values into translations.
    interpolation: {
      escapeValue: false, // escape passed in values to avoid XSS injections
    },
  });
  I18nManager.allowRTL(isRTL);
  I18nManager.forceRTL(isRTL);
}

initializeI18n();

export default i18n;
