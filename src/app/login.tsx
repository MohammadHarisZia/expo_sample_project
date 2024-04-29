import React from 'react';

import { Text, View } from '@/ui';
import { FocusAwareStatusBar } from '@/ui';

export default function Login() {
  return (
    <>
      <FocusAwareStatusBar />
      <View className="h-screen justify-start gap-4 py-2">
        <View className="flex h-1/4 items-center justify-center gap-5">
          <Text className="pb-4">Login</Text>
        </View>
      </View>
    </>
  );
}
