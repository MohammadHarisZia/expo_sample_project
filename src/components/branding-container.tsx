import type { ReactNode } from 'react';
import React from 'react';

import { ScrollView, View } from '@/ui';
import { Placeholder } from '@/ui/icons/placeholder';

interface BrandingContainerProps {
  children: ReactNode;
  gap?: number;
  marginTop?: number;
  paddingBottom?: number;
  clinicName?: string;
  slogan?: string;
}

export const BrandingContainer: React.FC<BrandingContainerProps> = ({
  children,
  gap = 4,
  marginTop,
  paddingBottom,
}) => {
  return (
    <View className="h-screen  justify-start gap-2 py-2">
      <View className=" flex h-1/4 items-center justify-end gap-5">
        <View className=" flex w-16 items-center justify-center rounded-xl bg-slate-300 p-3">
          <Placeholder className="h-10 w-40" color={'#1A202C'} />
        </View>
      </View>
      <ScrollView
        className=" rounded-t-2xl  bg-[#F1F1FA]  "
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: gap,
          minHeight: '75%',
          paddingBottom: paddingBottom ? paddingBottom : 0,
          marginTop: marginTop,
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
};
