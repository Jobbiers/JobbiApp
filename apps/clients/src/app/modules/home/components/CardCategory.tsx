import { Text } from '@jobbi/ui/src/components';
import { TouchableOpacity, Dimensions } from 'react-native';
import globalStyles from '../../../../../globalStyles';
import { Category } from '../../../interfaces/Category.interface';

const { width, height } = Dimensions.get('screen');

type Props = {
  item: Category;
  onPress: (item: Category) => void;
};

const CardCategory = ({ item, onPress }: Props) => (
  <TouchableOpacity
    onPress={() => onPress(item)}
    style={{
      borderRadius: 25,
      height: height * 0.09,
      width: width * 0.45,
      margin: 10,
      borderColor: globalStyles.lightPrimary.backgroundColor,
      borderWidth: 1,
      ...globalStyles.lightBg,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    }}
  >
    <Text mb={7} mr={20} shar={30} fos={20}>
      {item.name}
    </Text>
  </TouchableOpacity>
);

export default CardCategory;
