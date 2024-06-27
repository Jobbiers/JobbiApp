import { Icon, TextInput, Text, View } from '@jobbi/ui/src/components';
import { Icons } from '@jobbi/ui/src/components/Icon';
import { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import globalStyles from '../../../../../globalStyles';
import { Category } from '../../../interfaces/Category.interface';
import { CategoriesApi } from '../../../services/CategoriesApi';
import {
  CardCategory,
  CardProfessionals,
  CategoriesListCards,
  ProfessionalListCards,
} from '../components';
import { Professional } from '../../../interfaces/Professional.interface';
import { ProfessionalsApi } from '../../../services/ProfessionalsApi';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('screen');
type RenderOptions = 'categories' | 'professionals';

const Home = ({ navigation }: any) => {
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [rendering, setRendering] = useState<RenderOptions>('categories');
  const [loading, setLoading] = useState(false);
  const jobbiImage = require('../../../../../assets/icon.jpg');

  const OptionsRendering = {
    categories: {
      render: () => (
        <CategoriesListCards onPress={categoryPress} list={categories} searchValue={searchValue} />
      ),
    },
    professionals: {
      render: () => (
        <ProfessionalListCards
          list={professionals}
          loading={loading}
          onPress={handleProffesionalPress}
        />
      ),
    },
  };

  useEffect(() => {
    getCategories();

    return () => backHandler.remove();
  }, []);

  const backAction = () => {
    if (rendering == 'professionals') setRendering('categories');
    return true;
  };

  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  const getCategories = async () => {
    const resp = await CategoriesApi.getCategories();
    if (resp) {
      setCategories(resp);
    }
  };

  const categoryPress = async (item: Category) => {
    setSelectedCategory(item);
    setRendering('professionals');
    await getProfessionals();
  };

  const getProfessionals = async () => {
    setLoading(true);
    setTimeout(async () => {
      // get professionals by category with selectedCategory
      const resp = await ProfessionalsApi.getProfessionals();
      if (resp) setProfessionals(resp);
      setLoading(false);
    }, 2000);
  };

  const handleProffesionalPress = (item: Professional) => {
    console.log(item);
    navigation.navigate('ProfessionalDetail', { professionalItem: item });
  };

  return (
    <>
      <View f={0.9} ai={'center'}>
        <View ai={'center'} jc={'center'} fd={'row'}>
          <View style={{ width: '70%' }}>
            <Text fos={30} fow={'700'}>
              Hola usuario
            </Text>
            <View fd={'row'} ai={'center'}>
              <Icon
                name="map-marker"
                color={globalStyles.lightSecondary.backgroundColor}
                type={Icons.FontAwesome}
              />
              <Text fos={16} marginStart={10} col={'gray'}>
                Ubicacion
              </Text>
            </View>
          </View>
          <View>
            <Image source={jobbiImage} resizeMode="contain" style={styles.logo}></Image>
          </View>
        </View>
        <View fd={'row'} ai={'center'}>
          <View pos={'relative'} w={'85%'} ai={'center'} jc={'center'}>
            <TextInput
              onChangeText={setSearchValue}
              value={searchValue}
              placeholder="Buscar"
              br={20}
              bw={1}
              m={10}
              h={height * 0.05}
              w={width * 0.8}
              boc={'#D9D9D9'}
              p={10}
            />
            <Icon style={styles.searchIcon} name="search1" type={Icons.AntDesign} />
          </View>
          <View w={'15%'} ai={'center'} jc={'center'}>
            <Icon name="filter-sharp" size={30} type={Icons.Ionicons} />
          </View>
        </View>
      </View>
      {rendering == 'professionals' && (
        <View w={'100%'} pb={20} pl={10} ai={'center'} fd={'row'}>
          <TouchableOpacity onPress={backAction} style={{ width: '10%', alignItems: 'flex-start' }}>
            <AntDesign name="arrowleft" size={20} />
          </TouchableOpacity>
          <Text als={'flex-start'} fos={22}>
            Profesionales destacados
          </Text>
        </View>
      )}
      <View style={{ flex: 3 }}>{OptionsRendering[rendering].render()}</View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 110,
    height: 100,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
  },
});

export default Home;
