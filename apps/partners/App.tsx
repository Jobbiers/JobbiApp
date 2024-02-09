import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PopButton from "@jobbi/ui/src/components/PopButton";
import Box from "@jobbi/ui/src/components/Box";
import ThemeProvider from "@jobbi/ui/src/theme/";

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <Text>Open up App.js to start working on your app!</Text>
        <PopButton
          title="test"
          button_styles={{ backgroundColor: "red" }}
          onPress={() => {}}
        />
        <Box>
          {" "}
          <></>{" "}
        </Box>
        <StatusBar style="auto" />
      </ThemeProvider>
    </View>
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
