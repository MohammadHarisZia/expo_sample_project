import { useRouter } from 'expo-router';
// import { useColorScheme } from 'nativewind';
import React from 'react';

import { Item } from '@/components/settings/item';
import { ItemsContainer } from '@/components/settings/items-container';
import { LanguageItem } from '@/components/settings/language-item';
import { ThemeItem } from '@/components/settings/theme-item';
import { translate, useAuth } from '@/core';
import {
  Button,
  // colors,
  FocusAwareStatusBar,
  ScrollView,
  Text,
  View,
} from '@/ui';

export default function Settings() {
  const signOut = useAuth.use.signOut();
  // const { colorScheme } = useColorScheme();
  // const iconColor =
  //   colorScheme === 'dark' ? colors.neutral[400] : colors.neutral[500];

  const router = useRouter();
  const handleSetup = () => {
    router.push('/setup/');
  };

  return (
    <View className="m-auto w-full max-w-screen-md flex-1">
      <FocusAwareStatusBar />

      <ScrollView>
        <View className="flex-1 px-4 pt-16 ">
          <Text className="text-xl font-bold">
            {translate('settings.title')}
          </Text>
          <ItemsContainer title="settings.generale">
            <LanguageItem />
            <ThemeItem />
          </ItemsContainer>

          <View className="my-8">
            <ItemsContainer>
              <Item text="settings.logout" onPress={signOut} />
            </ItemsContainer>
            <Button label="setup" onPress={handleSetup} className="mt-4" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
