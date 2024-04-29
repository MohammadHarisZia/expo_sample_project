import { useEffect, useState } from 'react';

import { getStringAsync, setStringAsync } from '@/core/storage';

const IS_FIRST_TIME_KEY = 'IS_FIRST_TIME';

export const useIsFirstTime = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    const checkFirstTime = async () => {
      const value = await getStringAsync(IS_FIRST_TIME_KEY);

      if (value !== null && value !== 'true') {
        setIsFirstTime(false);
      }
    };
    checkFirstTime();
  }, []);

  const setIsFirstTimeAndUpdateStore = async (value: any) => {
    await setStringAsync(IS_FIRST_TIME_KEY, value.toString());
    setIsFirstTime(value);
  };

  return [isFirstTime, setIsFirstTimeAndUpdateStore] as const;
};
