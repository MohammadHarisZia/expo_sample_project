import React from 'react';

import { Text, View } from '@/ui';

const Success = () => {
  return (
    <View className="flex-1 items-center justify-between p-4 py-8">
      <View className="w-full items-center">
        <Text className="py-8 text-2xl font-bold">Success</Text>
      </View>
    </View>
  );
};

export default Success;
