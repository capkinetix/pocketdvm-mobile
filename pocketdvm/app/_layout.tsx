import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Pressable, Text } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {backgroundColor: "#2E7D32"},
        headerTintColor: "#fff",
        headerTitleStyle: {fontWeight: "600"},
      headerLeft: () => (
        <Pressable
          onPress={() => router.push("/")}
          style={{ marginLeft: 12 }}
        >
          <Text style={{color: "white", fontWeight: "600", fontSize: 48 }}>
            Home
          </Text>
        </Pressable>
      ),
    }}
    />
  );
}