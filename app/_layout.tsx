import store from "@/redux/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { useEffect } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    RalewayBlack: require("@/assets/fonts/Raleway-Black.ttf"),
    RalewayExtraBold: require("@/assets/fonts/Raleway-ExtraBold.ttf"),
    RalewayBold: require("@/assets/fonts/Raleway-Bold.ttf"),
    RalewaySemiBold: require("@/assets/fonts/Raleway-SemiBold.ttf"),
    RalewayExtraLight: require("@/assets/fonts/Raleway-ExtraLight.ttf"),
    RalewayLight: require("@/assets/fonts/Raleway-Light.ttf"),
    RalewayMedium: require("@/assets/fonts/Raleway-Medium.ttf"),
    RalewayRegular: require("@/assets/fonts/Raleway-Regular.ttf"),
    RalewayThin: require("@/assets/fonts/Raleway-Thin.ttf"),
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
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
