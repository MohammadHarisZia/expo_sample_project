import { Stack } from 'expo-router';
import React from 'react';

const OnboardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,

          title: 'Welcome',
          headerTitle: 'Greetings',
        }}
      />

      <Stack.Screen
        name="more-about-you"
        options={{
          headerShown: false,

          headerTitle: 'Meet Jane',
        }}
      />
      <Stack.Screen
        name="topics"
        options={{
          headerShown: false,
          headerTitle: 'Topics',
        }}
      />
      <Stack.Screen
        name="success"
        options={{
          headerShown: false,

          headerTitle: 'Meet Jane',
        }}
      />
    </Stack>
  );
};

export default OnboardingLayout;
