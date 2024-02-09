import React from "react";
import { StyleSheet, Text } from "react-native";
import { Routes } from "./src/app/routes/Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemeProvider from "@jobbi/ui/src/theme";

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* <ThemeProvider> */}
            {true && <Routes />}
            {/* <Text>Test Page</Text> */}
          {/* </ThemeProvider> */}
        </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
