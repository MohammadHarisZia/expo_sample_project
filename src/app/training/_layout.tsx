import { Stack } from 'expo-router';
import React from 'react';

const SinLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(sin)/[id]"
        options={{
          headerShown: false,
          title: 'SIN',
          headerTitle: 'SIN',
        }}
      />
      <Stack.Screen
        name="(sin)/intro"
        options={{
          headerShown: false,
          title: 'SIN Intro',
          headerTitle: 'SIN Intro',
        }}
      />
    </Stack>
  );
};

export default SinLayout;
