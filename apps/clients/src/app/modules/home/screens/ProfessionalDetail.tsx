import { Icon, Text, View } from '@jobbi/ui/src/components';
import { Icons } from '@jobbi/ui/src/components/Icon';
import { useNavigation } from '@react-navigation/native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import globalStyles from '../../../../../globalStyles';
import { TouchableOpacity } from 'react-native';

const ProfessionalDetail = ({ route }: any) => {
  const navigation = useNavigation();
  const { professionalItem } = route.params;

  return (
    <View w={'100%'} h={'100%'}>
      <View pt={10} ai={'center'}>
        <View bg={'gray'} h={175} w={175} br={100}></View>
        <View pt={10} fd={'row'} jc={'center'} ai={'center'}>
          <Text fos={25}>
            {professionalItem.name} {professionalItem.lastName}
          </Text>
          {professionalItem.verified && (
            <Icon name="verified" color="#179CF0" size={25} type={Icons.MaterialIcons}></Icon>
          )}
        </View>
      </View>
      <View p={20}>
        <View jc={'space-between'} ai={'center'} fd={'row'}>
          <StarRatingDisplay
            rating={4}
            starSize={40}
            starStyle={{ width: 26, justifyContent: 'center', alignItems: 'center' }}
          />
          <Icon name="hearto" size={30} type={Icons.AntDesign}></Icon>
        </View>
        <View mt={20} w={'100%'} h={70} fd={'row'} br={50} bw={1} boc={'#843dff'}>
          <View
            w={'33.33%'}
            jc={'center'}
            ai={'center'}
            bc={'transparent'}
            bblr={50}
            h={'100%'}
            brw={1}
            boc={'#843dff'}
          >
            <Text>A domicilio</Text>
            <Icon name="check" type={Icons.AntDesign}></Icon>
          </View>
          <View
            w={'33.33%'}
            jc={'center'}
            ai={'center'}
            bc={'transparent'}
            h={'100%'}
            brw={1}
            boc={'#843dff'}
          >
            <View fd={'row'} jc={'center'} ai={'center'}>
              <Text>Horarios</Text>
              <Icon name="calendar" type={Icons.AntDesign}></Icon>
            </View>
            <Text>Lunes a viernes</Text>
            <Text>9:00 a 16:00</Text>
          </View>
          <View
            w={'33.33%'}
            jc={'center'}
            ai={'center'}
            bc={'transparent'}
            h={'100%'}
            boc={'#843dff'}
          >
            <Text>Distancia</Text>
            <View fd={'row'} jc={'center'} ai={'center'}>
              <Text pr={10} fow={'700'} fos={18}>
                3Km
              </Text>
              <Icon name="people-arrows" type={Icons.FontAwesome5}></Icon>
            </View>
          </View>
        </View>
        <View w={'100%'} mt={10} ai={'flex-start'} jc={'center'}>
          <Text fos={20} fow={'800'} my={5}>
            Servicios de electricidad
          </Text>
          <Text fos={15}>Aca iria texto descripcion del servicio</Text>
        </View>
      </View>
      <View jc={'flex-end'} pos={'absolute'} ai={'center'} b={100} r={20}>
        <TouchableOpacity
          style={{
            ...globalStyles.lightSecondary,
            width: 70,
            height: 70,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon name="calendar" type={Icons.AntDesign} size={30} color="white"></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...globalStyles.lightWarning,
            width: 60,
            height: 60,
            borderRadius: 100,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon name="comments-o" type={Icons.FontAwesome} size={30} color="white"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfessionalDetail;
