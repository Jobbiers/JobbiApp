import React from "react";
import { Text, View } from "tamagui";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <View>{children}</View>
    </>
  );
};

export default Box;
