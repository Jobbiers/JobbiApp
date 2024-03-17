import { Icon, Text, View } from '@jobbi/ui/src/components';
import { Icons } from '@jobbi/ui/src/components/Icon';
import { useNavigation } from '@react-navigation/native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import globalStyles from '../../../../../globalStyles';
import { TouchableOpacity } from 'react-native';

const ProfessionalDetail = ({ route }: any) => {
  const navigation = useNavigation();
  const { professionalItem } = route.params;

  console.log(route.params.professionalItem);
  return (
    <View w={'100%'} h={'100%'}>
      <View pt={10} ai={'center'}>
        <View bg={'gray'} h={250} w={250} br={150}></View>
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
        <View>
          <TouchableOpacity
            style={{
              ...globalStyles.lightPrimary,
              width: '50%',
              height: 70,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 70,
            }}
          >
            <Text fos={24} col={'white'} fow={'bold'}>
              Comentarios
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View jc={'flex-end'} pos={'absolute'} ai={'center'} b={150} r={20}>
        <TouchableOpacity
          style={{
            ...globalStyles.lightPrimary,
            width: 60,
            height: 60,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon name="calendar" type={Icons.AntDesign} size={30} color="white"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfessionalDetail;
