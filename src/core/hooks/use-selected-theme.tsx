import { colorScheme, useColorScheme } from 'nativewind';
import React, { useEffect } from 'react';

import { getStringAsync, setStringAsync } from '@/core/storage';

const SELECTED_THEME = 'SELECTED_THEME';
export type ColorSchemeType = 'light' | 'dark' | 'system';

export const useSelectedTheme = () => {
  const { colorScheme: _color, setColorScheme } = useColorScheme();
  const [theme, _setTheme] = React.useState<ColorSchemeType | null>(null);

  useEffect(() => {
    const fetchStoredTheme = async () => {
      const storedTheme = await getStringAsync(SELECTED_THEME);
      _setTheme(storedTheme as ColorSchemeType | null);
    };

    fetchStoredTheme();
  }, []);

  const setSelectedTheme = React.useCallback(
    async (t: ColorSchemeType) => {
      setColorScheme(t);
      await setStringAsync(SELECTED_THEME, t);
      _setTheme(t);
    },
    [setColorScheme]
  );

  const selectedTheme = (theme ?? 'system') as ColorSchemeType;
  return { selectedTheme, setSelectedTheme };
};

export const loadSelectedTheme = async () => {
  const theme = await getStringAsync(SELECTED_THEME);
  if (theme) {
    colorScheme.set(theme as ColorSchemeType);
  }
};
