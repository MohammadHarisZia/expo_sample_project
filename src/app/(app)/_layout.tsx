/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unstable-nested-components */
import { SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { getAllTabTitles, TabIcon } from '@/components/tab-icon';
import { useAuth } from '@/core';
import {
  MyAwards as MyAwardsIcon,
  MyDoctor,
  MyStuff as MyStuffIcon,
  MyTraining as MyTrainingIcon,
} from '@/ui/icons';

export default function TabLayout() {
  const tabTitles = getAllTabTitles();
  const status = useAuth.use.status();

  // const [isFirstTime] = useIsFirstTime();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { height: 70, paddingTop: 10, paddingBottom: 10 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: tabTitles.mytraining,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon focused={focused}>
              <MyTrainingIcon color={color} />
            </TabIcon>
          ),
          tabBarTestID: 'feed-tab',
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: tabTitles.mystuff,
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon focused={focused}>
              <MyStuffIcon color={color} />
            </TabIcon>
          ),
          tabBarTestID: 'style-tab',
        }}
      />
      <Tabs.Screen
        name="awards"
        options={{
          title: tabTitles.myawards,
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon focused={focused}>
              <MyAwardsIcon color={color} />
            </TabIcon>
          ),
          tabBarTestID: 'style-tab',
        }}
      />
      <Tabs.Screen
        name="clinic"
        options={{
          title: tabTitles.mydoctor,
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon focused={focused}>
              <MyDoctor color={color} />
            </TabIcon>
          ),
          tabBarTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}

// const CreateNewTrainingLink = () => {
//   return (
//     <Link href="/training/add-post" asChild>
//       <Pressable className="px-3">
//         <Text className="text-primary-300">Create</Text>
//       </Pressable>
//     </Link>
//   );
// };
