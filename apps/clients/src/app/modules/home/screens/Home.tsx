import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@jobbi/ui/src/components';
import useTheme from '@jobbi/ui/src/theme/useTheme';

const Home = ({ navigation }: any) => {
  const theme = useTheme();

  React.useEffect(() => {
    console.log('home mounted');
  }, []);

  return (
    <View style={{ padding: theme.spacing.medium }}>
      <Text>home</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
