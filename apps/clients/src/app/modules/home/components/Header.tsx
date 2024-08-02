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
    <View style={{ padding: theme.spacing.md }}>
      <View style={styles.container}>
        <Text style={styles.title} tx={'home.title'}/>
        <TouchableOpacity onPress={pressButton}>
          <Icon type={Icons.Feather} name="message-circle" />
        </TouchableOpacity>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userText} tx='home.grettingsUser' txOptions={{username: user.name.split(' ')[0]}}></Text>
        <TouchableOpacity onPress={pressButton}>
          <Text style={styles.adressText}>{user.adress}</Text>
        </TouchableOpacity>
        <TextInput style={styles.textInput} placeholderTx="home.placeholder">
        </TextInput>
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
  adressText: {
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
  textInput: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
    width: '100%',
    fontFamily: 'PublicSansRegular',
    fontSize: fontSizes.body,
    backgroundColor: '#F2F0F5',
  },
});
