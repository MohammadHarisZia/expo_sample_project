import * as React from 'react';

import { FocusAwareStatusBar, ScrollView, Text, View } from '@/ui';
import Trophy from '@/ui/icons/Trophy.svg';

export default function Completion() {
  return (
    <View className="flex-1">
      <ScrollView>
        <FocusAwareStatusBar />
        <View className="mt-20 flex-1 items-center justify-start gap-16 ">
          <Text className="text-3xl font-bold ">Completion</Text>
          <View className="flex h-60 w-48 flex-col items-center justify-center rounded-3xl border-2 border-[#EBECFD] bg-[#FCFCFC] pl-5">
            <Trophy width={'60%'} height={'60%'} />
          </View>
          <View className="flex gap-4 self-center">
            <Text className="max-w-[90%] text-center text-2xl font-bold ">
              Hurray!
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
