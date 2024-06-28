import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../theme/useTheme';

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>{children}</SafeAreaView>
  );
};

export default Root;
