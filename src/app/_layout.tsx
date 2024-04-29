/* eslint-disable react/react-in-jsx-scope */
// import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// import { useNavigationContainerRef } from '@react-navigation/native';
import { ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { APIProvider } from '@/api';
import { hydrateAuth, loadSelectedTheme } from '@/core';
import { useThemeConfig } from '@/core/use-theme-config';
export { ErrorBoundary } from 'expo-router';
// Import  global CSS file
import '../../global.css';

// import { createNotifications } from 'react-native-notificated';

export const unstable_settings = {
  initialRouteName: '(app)',
};

hydrateAuth();
loadSelectedTheme();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const navigationRef = useNavigationContainerRef();
  // useReactNavigationDevTools(navigationRef);
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="setup" options={{ headerShown: false }} />
        <Stack.Screen name="otp" options={{ headerShown: false }} />
        <Stack.Screen name="training" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();
  // const { NotificationsProvider } = createNotifications({
  //   notificationPosition: 'top-right',
  // });

  return (
    <GestureHandlerRootView
      style={styles.container}
      className={theme.dark ? `dark` : undefined}
    >
      <ThemeProvider value={theme}>
        <APIProvider>
          <BottomSheetModalProvider>
            {/* <NotificationsProvider /> */}
            {children}
            <FlashMessage position="top" />
          </BottomSheetModalProvider>
        </APIProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
