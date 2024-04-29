import { t } from 'i18next';
import * as React from 'react';
import { View } from 'react-native';

type Props = {
  children: React.ReactNode;
  focused: boolean;
};
export const TabIcon = ({ children, focused }: Props) => {
  return focused ? (
    <>
      <View className=" absolute -bottom-5 flex h-16 w-20 flex-row  items-start justify-center  rounded-md bg-[#dbe6fb] pt-[0.05rem] opacity-50 dark:bg-[#1A202C] md:-bottom-2 md:-left-5 md:w-36" />
      <View>{children}</View>
    </>
  ) : (
    <>{children}</>
  );
};

export const getAllTabTitles = () => {
  const mytraining = t('tabs.mytraining');
  const mystuff = t('tabs.mystuff');
  const mydoctor = t('tabs.mydoctor');
  const myawards = t('tabs.myawards');

  return {
    mytraining,
    mystuff,
    mydoctor,
    myawards,
    // Add more tab titles here as needed
  };
};
