import { Icon, Icons, Text } from '@jobbi/ui/src/components';
import { TouchableOpacity, Dimensions, StyleSheet, View } from 'react-native';
import { defaultTheme, useTheme } from '@jobbi/ui/src/theme';
import { CategoryDTO } from '../../../store/interfaces';
import { iconsCategory } from '../../../../../../../packages/ui/src/utils/iconsCategory';
const { fontSizes, spacing } = defaultTheme;
const { width } = Dimensions.get('screen');

type Props = {
  item: CategoryDTO;
  onPress: (item: CategoryDTO) => void;
};

const CardCategory = ({ item, onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={{
          borderRadius: 18,
          height: width * 0.2,
          width: width * 0.2,
          marginHorizontal: spacing.xs,
          marginVertical: spacing.sm,
          backgroundColor: colors.backgroundVariant,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon
          type={iconsCategory[item.name as keyof typeof iconsCategory].type}
          name={iconsCategory[item.name as keyof typeof iconsCategory].vector}
        />
      </TouchableOpacity>
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  categoryName: {
    fontSize: fontSizes.caption,
    width: width * 0.2,
    textAlign: 'center',
  },
});

export default CardCategory;
