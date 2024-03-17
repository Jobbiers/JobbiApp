import { memo } from 'react';
import { Professional } from '../../../interfaces/Professional.interface';
import { Text, View } from '@jobbi/ui/src/components';
import { ActivityIndicator, FlatList } from 'react-native';
import globalStyles from '../../../../../globalStyles';
import CardProfessional from './CardProfessional';

type props = {
  list: Professional[];
  onPress: (item: Professional) => void;
  loading: boolean;
};

const ProfessionalListCards = ({ list, onPress, loading }: props) => (
  <View ai={'center'} h={'100%'}>
    {loading ? (
      <ActivityIndicator color={globalStyles.lightPrimary.backgroundColor} />
    ) : (
      <>
        <FlatList
          data={list}
          renderItem={({ item }) => <CardProfessional item={item} onPress={onPress} />}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            paddingBottom: 100,
          }}
        />
      </>
    )}
  </View>
);

export default memo(ProfessionalListCards);
