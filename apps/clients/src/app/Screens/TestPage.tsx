import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { useTheme } from "@jobbi/ui/src/theme";
// import { View as TView } from "tamagui";

// import Box from "@jobbi/ui/src/components/Box";
import { PopButton }from "@jobbi/ui/src/components";

const TestPage = () => {

  return (
    <>
      {/* <TView></TView> */}
      <PopButton onPress={()=>{}} title="asd" />
      <Text>Test Page</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TestPage;
