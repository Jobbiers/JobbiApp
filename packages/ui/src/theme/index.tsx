import React from "react";
import { TamaguiProvider, useTheme } from "tamagui";
import config from "../../tamagui.config";

const provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TamaguiProvider config={config} defaultTheme={"light"}>
      {children}
    </TamaguiProvider>
  );
};

export default provider;
export { useTheme };
