import { Text, View } from '@jobbi/ui/src/components';
import { memo } from 'react';
import { FlatList } from 'react-native';
import { Category } from '../../../interfaces/Category.interface';
import CardCategory from './CardCategory';

type props = {
  list: Category[];
  onPress: (item: Category) => void;
  searchValue: string;
};

const CategoriesListCards = ({ list, searchValue, onPress }: props) => (
  <View ai={'flex-start'} jc={'center'}>
    {searchValue && (
      <Text ml={20} pb={20} fos={20} fow={'700'}>
        Para "{searchValue}" se ha encontrado...
      </Text>
    )}
    <FlatList
      data={list}
      renderItem={({ item }) => <CardCategory onPress={onPress} item={item} />}
      keyExtractor={(item) => `${item.id}`}
      numColumns={2}
      contentContainerStyle={{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 100,
      }}
    />
  </View>
);

export default memo(CategoriesListCards);
