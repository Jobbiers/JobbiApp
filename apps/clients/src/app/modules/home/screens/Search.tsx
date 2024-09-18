import React from 'react';
import { View, Text, TextInput, Chip } from '@jobbi/ui/src/components';
import useTheme from '@jobbi/ui/src/theme/useTheme';
import { FlatList } from 'react-native';

const Search = () => {
  const theme = useTheme();

  return (
    <View style={{ padding: theme.spacing.md }}>
      <TextInput placeholderTx="home.placeholder" onChangeText={() => {}} />
        <View>
            <FlatList
                data={[]}
                renderItem={(item) => <Chip />}
                numColumns={3}
            />
        </View>
    </View>
  );
};

export default Search;

