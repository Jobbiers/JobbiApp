import { Icon, Icons, TextInput, View, Text } from '@jobbi/ui/src/components';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../../store/hooks';
import { defaultTheme } from '@jobbi/ui/src/theme';
import useTheme from '@jobbi/ui/src/theme/useTheme';
const { fontSizes, spacing } = defaultTheme;

const Header = () => {
  const theme = useTheme();
  const { user } = useAppSelector((state) => state.auth);

  const pressButton = () => {
    console.log('chatPressed');
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title} tx={'home.title'} />
        <TouchableOpacity onPress={pressButton}>
          <Icon type={Icons.Feather} name="message-circle" />
        </TouchableOpacity>
      </View>
      <View style={styles.userInfo}>
        <Text
          style={styles.userText}
          tx="home.grettingsUser"
          txOptions={{ username: user?.name }}
        ></Text>
        <TouchableOpacity onPress={pressButton}>
          <Text style={styles.addressText}>{user?.address}</Text>
        </TouchableOpacity>
        <TextInput placeholderTx="home.placeholder" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  userInfo: {
    marginTop: spacing.sm,
  },
  userText: {
    fontSize: fontSizes.title,
    fontFamily: 'PublicSansRegular',
  },
  addressText: {
    fontSize: fontSizes.body,
    fontFamily: 'PublicSansRegular',
    color: 'gray',
    marginTop: spacing.tiny,
    textDecorationLine: 'underline',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'CaveatBold',
    fontSize: fontSizes.subtitle,
  },
});
