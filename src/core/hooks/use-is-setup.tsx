import { useEffect, useState } from 'react';

import { getStringAsync, setStringAsync } from '@/core/storage';

const IS_SETUP_KEY = 'IS_SETUP';

export const useIsSetup = () => {
  const [isSetup, setIsSetup] = useState(true);

  useEffect(() => {
    const checkSetup = async () => {
      const value = await getStringAsync(IS_SETUP_KEY);
      if (value !== null && value !== 'true') {
        setIsSetup(false);
      }
    };
    checkSetup();
  }, []);

  const setIsSetupAndUpdateStore = async (value: any) => {
    await setStringAsync(IS_SETUP_KEY, value.toString());
    setIsSetup(value);
  };

  return [isSetup, setIsSetupAndUpdateStore] as const;
};
