import * as React from 'react';

import { FocusAwareStatusBar, Text, View } from '@/ui';

export default function MyTraining() {
  return (
    <View className="m-auto w-full max-w-screen-md flex-1">
      <FocusAwareStatusBar />
      <Text> Home Page</Text>
    </View>
  );
}
