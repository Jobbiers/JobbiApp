import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '@jobbi/ui/src/components';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

const profile = require('../../../../../assets/mon.jpeg');

const ProfessionalDetail = () => {

  return (
    <View style={styles.mainContainer}>
      <Image source={profile} style={styles.image} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Mon el jardinero</Text><Ionicons name="checkmark-circle" size={30} color="#66aecc" />
      </View>
      <Text style={styles.jobDetail}>Experto en paisajismo y cuidado de plantas</Text>
      <Text style={styles.ubication}>Área Metropolitana de Buenos Aires</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('TODO: pantalla de chat')}>
          <Text style={styles.buttonText}>Enviar mensaje </Text>
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="white"/>
        </TouchableOpacity>
        <Ionicons name="heart" size={30} color="#FF6347" style={styles.heartIcon} />
      </View>
      <Text style={styles.schedule}>Horario: Lunes a Viernes. de 9:00 a 18:00</Text>
      <View style={styles.separator}></View>
      <View style={styles.servicesContainer}>
        <Text style={styles.textServices}>Servicios destacados</Text>
      </View>
      <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
        <View style={styles.column}>
          <View style={styles.box}><Text style={styles.textService}>Cuidado de Jardines</Text><Text style={styles.subTitleService}>Desde: $300</Text></View>
        </View>
        <View style={styles.column}>
          <View style={styles.box}><Text>Diseño de Espacios Verdes</Text></View>
        </View>
        <View style={styles.column}>
          <View style={styles.box}><Text>Cuidado de Jardines</Text></View>
        </View>
        <View style={styles.column}>
          <View style={styles.boxSeeMore}><Text style={{ color: '#7A6387', textDecorationLine: 'underline' }}>Ver más</Text><Ionicons name="arrow-forward-outline" size={24} color="#7A6387" /></View>
        </View>
      </ScrollView>
      <View style={styles.separator}></View>
      <View style={styles.paymentContainer}>
        <Text style={styles.textServices}>Medios de pago</Text>
      </View>
      <View style={styles.paymentIcons}>
        <View style={styles.paymentAling}>
          <Ionicons name="cash-outline" size={32} color="#4CAF50" />
          <Text style={styles.paymentText}>Efectivo</Text>
        </View>
        <View style={styles.paymentAling}>
          <Ionicons name="swap-horizontal" size={32} color="#607D8B" />
          <Text style={styles.paymentText}>Transferencias</Text>
        </View>
        <View style={styles.paymentAling}>
          <Ionicons name="card-outline" size={32} color="#2196F3" />
          <Text style={styles.paymentText}>Tarjetas</Text>
        </View>
        <View style={styles.paymentAling}>
          <Ionicons name="wallet-outline" size={32} color="#3F51B5" />
          <Text style={styles.paymentText}>Otros medios</Text>
        </View>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.starsContainer} pointerEvents="none">
        <Text style={styles.textServices}>Reseñas</Text>
        <View style={styles.starsSub}>
          <StarRating
            rating={4}
            starSize={26}
            color="#ebc80e"
            onChange={() => { }}
          />
          <Text style={{ color: 'gray' }}>(83%)</Text>
        </View>
      </View>
      <View style={styles.boxComment}>
        <View style={styles.headerComment}>
          <Text style={{ fontWeight: 'bold' }}>Pucho Delbazi</Text>
          <Text style={{ color: 'gray' }}>25/09/2024</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '97%' }}>
          <StarRating
            rating={5}
            starSize={18}
            color="#ebc80e"
            onChange={() => { }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: 'gray' }}>Es el mejor, me arreglo la maceta, le doy 10/10. Ojalá me enseñe a jugar al tenis.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  starsSub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    marginRight: 25
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginTop: 10
  },
  name: {
    fontSize: 24,
    marginTop: 6,
  },
  jobDetail: {
    color: '#6e6e6e',
    marginTop: 6
  },
  ubication: {
    marginTop: 4,
    color: '#7A6387',
    textDecorationLine: 'underline'
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  
  button: {
    flexDirection: 'row',
    width: '70%',
    height: 40,
    backgroundColor: '#9F75FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  heartIcon: {
    position: 'absolute',
    right: 20,
  },
  buttonText: {
    color: 'white',
    marginRight:10
  },
  scrollView: {
    flexDirection: 'row',
    padding: 10,
  },
  box: {
    margin: 6,
    width: 200,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  boxSeeMore: {
    margin: 6,
    width: 100,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  boxComment: {
    margin: 6,
    width: '90%',
    height: 100,
    borderRadius: 4,
    paddingTop: 10,
    paddingLeft: 20,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  column: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  textService: {
    color: '#1C170D',
    marginBottom: 8
  },
  textServices: {
    fontSize: 18
  },
  subTitleService: {
    color: '#4A4A4A'
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: 4,
},
paymentIcons: {
  flexDirection: 'row',
  justifyContent: 'space-between', // o 'flex-start'
  alignItems: 'center',
  width: '90%', // Asegúrate de que tenga suficiente ancho
  marginTop: 10,
},
paymentAling: {
  alignItems: 'center',
  marginHorizontal: 10, // Para separar los íconos entre sí
},
paymentText: {
  color: '#4A4A4A',
  fontSize: 14, // O el tamaño que prefieras
  fontWeight: '500', // Para un poco más de énfasis
  marginTop: 5, // Para dar un poco de espacio entre el ícono y el texto
},
  schedule: {
    color: '#4A4A4A',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 18
  },
  separator: {
    height: 1,  // Grosor de la línea
    backgroundColor: 'gray',  // Color gris claro, puedes cambiarlo por un color de tu paleta
    marginVertical: 10,  // Espaciado entre las secciones,
    width: '100%',
    opacity: 0.5
  },
  headerComment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%'
  },
  comment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: 10
  }
});

export default ProfessionalDetail;
