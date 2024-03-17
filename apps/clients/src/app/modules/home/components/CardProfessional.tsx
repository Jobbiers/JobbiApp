import { Dimensions, TouchableOpacity } from 'react-native';
import { View, Text, Icon } from '../../../../../../../packages/ui/src/components';
import globalStyles from '../../../../../globalStyles';
import { Icons } from '@jobbi/ui/src/components/Icon';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { Professional } from '../../../interfaces/Professional.interface';

const { width, height } = Dimensions.get('screen');

type Props = {
  item: Professional;
  onPress: (item: Professional) => void;
};

const CardProfessional = ({ item, onPress }: Props) => {
  const handlePressEvent = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity
      onPress={handlePressEvent}
      style={{
        backgroundColor: 'rgba(182, 164, 255, .3)',
        borderColor: globalStyles.lightPrimary.backgroundColor,
        borderRadius: 15,
        width: width * 0.9,
        height: height * 0.11,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}
    >
      <View w={'20%'} ai={'center'} jc={'center'} bc={'transparent'}>
        <View w={60} h={60} br={50} ai={'center'} jc={'center'} bw={1} boc={'gray'}>
          <Icon name="person" type={Icons.Ionicons} color="black"></Icon>
          {/* <Image></Image> */}
        </View>
      </View>
      <View w={'40%'} ai={'center'} jc={'center'} bc={'transparent'}>
        <Text fos={18} fow={'700'}>
          {item.name} {item.lastName}
        </Text>
        <StarRatingDisplay
          rating={4}
          starSize={25}
          starStyle={{ width: 12, justifyContent: 'center', alignItems: 'center' }}
        />
        <Text col={'gray'} fos={14} fow={'700'}>
          Reseñas: 24
        </Text>
      </View>
      <View w={'40%'} h={'100%'} ai={'center'} jc={'space-around'} bc={'transparent'}>
        <View fd={'row'} ai={'center'} bc={'transparent'}>
          <Text col={'gray'} fos={16} fow={'700'}>
            A domicilio
          </Text>
          <Icon
            name="check"
            color="green"
            type={Icons.FontAwesome}
            style={{ marginLeft: 5 }}
          ></Icon>
        </View>
        <Text col={'gray'} fos={16} fow={'700'}>
          Lunes a viernes
        </Text>
      </View>
      <Icon
        name="verified"
        color="#179CF0"
        size={25}
        type={Icons.MaterialIcons}
        style={{ position: 'absolute', top: 3, right: 3 }}
      ></Icon>
      <View pos={'absolute'} b={3} r={12} fd={'row'} bc={'transparent'} ai={'center'}>
        <Icon
          name="map-marker"
          size={18}
          color={globalStyles.lightSecondary.backgroundColor}
          type={Icons.FontAwesome}
        />
        <Text ml={3}>3km</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardProfessional;
