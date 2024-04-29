import type TranslateOptions from 'i18next';
import i18n from 'i18next';
import memoize from 'lodash.memoize';
import { useCallback, useEffect, useState } from 'react';
import { I18nManager, NativeModules, Platform } from 'react-native';
import RNRestart from 'react-native-restart';

import { getStringAsync, setStringAsync } from '@/core/storage';

import type { Language, resources } from './resources';
import type { RecursiveKeyOf } from './types';

type DefaultLocale = typeof resources.en.translation;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

export const LOCAL = 'local';

export const getLanguage = async () => {
  try {
    const language = await getStringAsync(LOCAL);
    return language as Language;
  } catch (error) {
    console.error(
      'Error retrieving selected language from SecureStore:',
      error
    );
  }
};

export const translate = memoize(
  (key: TxKeyPath, options = undefined) =>
    i18n.t(key, options) as unknown as string,
  (key: TxKeyPath, options: typeof TranslateOptions) =>
    options ? key + JSON.stringify(options) : key
);

export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang);
  if (lang === 'ar') {
    I18nManager.forceRTL(true);
  } else {
    I18nManager.forceRTL(false);
  }

  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    if (__DEV__) NativeModules.DevSettings.reload();
    else RNRestart.restart();
  } else if (Platform.OS === 'web') {
    window.location.replace('/');
  }
};

export const useSelectedLanguage = (): {
  language: Language | undefined;
  setLanguage: (lang: Language) => void;
} => {
  const [language, setLang] = useState<Language>();

  useEffect(() => {
    const loadLanguageFromStorage = async () => {
      const storedLanguage = await getLanguage();
      if (storedLanguage) {
        setLang(storedLanguage);
      }
    };
    loadLanguageFromStorage();
  }, [language]);

  const setLanguage = useCallback(
    async (lang: Language) => {
      if (lang) {
        setLang(lang);
        await setStringAsync(LOCAL, lang);
        changeLanguage(lang);
      }
    },
    [setLang]
  );

  return { language, setLanguage };
};
