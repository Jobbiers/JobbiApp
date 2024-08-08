import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import BusinessResponse from '../../../mocks/Business.response';
import { defaultTheme } from '@jobbi/ui/src/theme';
import { Loading, SkeletonCardBusiness } from '../components';
import { Category } from '../../../interfaces/Category.interface';

interface CategoryDetailParams {
    category: Category;
  }

const CategoryDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const route = useRoute<RouteProp<Record<string, CategoryDetailParams>, string>>();

  useEffect(() => {
    // Simulamos una carga de datos
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <FlatList
          data={BusinessResponse.filter(
            (business: any) => business.categoryId === route.params?.category?.id,
          )}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: { item: any }) => (
            <View style={styles.card}>
              <Text style={styles.description}>{item.verified}</Text>
              <Text style={styles.businessName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.hours}>
                Horario: {item.openingHours[0]} - {item.openingHours[1]}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: defaultTheme.spacing.md,
    backgroundColor: '#FFFFFF', // Asumiendo que el fondo es blanco
  },
  card: {
    backgroundColor: '#F5F5F5', // Asumiendo un color gris claro para la superficie
    borderRadius: 10,
    padding: defaultTheme.spacing.md,
    marginBottom: defaultTheme.spacing.sm,
    elevation: 3,
  },
  businessName: {
    fontSize: defaultTheme.fontSizes.subtitle,
    fontWeight: 'bold',
    marginBottom: defaultTheme.spacing.xs,
  },
  description: {
    fontSize: defaultTheme.fontSizes.body,
    color: '#000000', // Asumiendo que el texto principal es negro
    marginBottom: defaultTheme.spacing.xs,
  },
  hours: {
    fontSize: defaultTheme.fontSizes.caption,
    color: '#757575', // Asumiendo un gris oscuro para el texto secundario
  },
});

export default CategoryDetail;
