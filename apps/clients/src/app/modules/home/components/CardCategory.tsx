import { Icon, Icons, Text } from '@jobbi/ui/src/components';
import { TouchableOpacity, Dimensions, StyleSheet, View } from 'react-native';
import { Category } from '../../../interfaces/Category.interface';
import { defaultTheme } from '@jobbi/ui/src/theme';
const { fontSizes, spacing, colors } = defaultTheme;
const { width } = Dimensions.get('screen');

type Props = {
  item: Category;
  onPress: (item: Category) => void;
};

const CardCategory = ({ item, onPress }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={{
        borderRadius: spacing.lg,
        height: width * 0.22,
        width: width * 0.22,
        marginHorizontal: spacing.xs,
        marginVertical: spacing.sm,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon type={item.type} name={item.vector}/>
    </TouchableOpacity>
    <Text style={styles.categoryName}>{item.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  categoryName: {
    fontSize: fontSizes.caption,
    marginBottom: spacing.sm,
  },
});

export default CardCategory;
