import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { NativeWindStyleSheet } from "nativewind";

import { useColorScheme } from '@/hooks/useColorScheme';

NativeWindStyleSheet.setOutput({
  default: "native",
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Outfit-Thin': require('../assets/fonts/Outfit-Thin.ttf'),
    'Outfit-ExtraLight': require('../assets/fonts/Outfit-ExtraLight.ttf'),
    'Outfit-Light': require('../assets/fonts/Outfit-Light.ttf'),
    'Outfit-Regular': require('../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'Outfit-SemiBold': require('../assets/fonts/Outfit-SemiBold.ttf'),
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'Outfit-ExtraBold': require('../assets/fonts/Outfit-ExtraBold.ttf'),
    'Outfit-Black': require('../assets/fonts/Outfit-Black.ttf'),
    
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='index'>
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="swap" options={{ headerShown: false }} />
        <Stack.Screen name="pilih_driver" options={{ headerShown: false }} />
        <Stack.Screen name="pilih_installer" options={{ headerShown: false }} />
        <Stack.Screen name="detail_fvendor" options={{ headerShown: false }} />
        <Stack.Screen name="detail_alamat" options={{ headerShown: false }} />
        <Stack.Screen name="detail_order" options={{ headerShown: false }} />
        <Stack.Screen name="employee" options={{ headerShown: false }} />
        <Stack.Screen name="admin" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
