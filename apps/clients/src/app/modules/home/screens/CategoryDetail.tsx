import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import BusinessResponse from '../../../mocks/Business.response';
import { defaultTheme, useTheme } from '@jobbi/ui/src/theme';
import { Text } from '@jobbi/ui/src/components';
import { SkeletonCardBusiness } from '../components';
import { Category } from '../../../interfaces/Category.interface';

interface CategoryDetailParams {
  category: Category;
}

const CategoryDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();

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
        <FlatList
          data={[1, 2, 3]} // Número de esqueletos a mostrar
          keyExtractor={(item: number) => item.toString()}
          renderItem={() => <SkeletonCardBusiness />}
        />
      ) : (
        <FlatList
          data={BusinessResponse.filter(
            (business: any) => business.categoryId === route.params?.category?.id,
          )}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: { item: any }) => (
            <View style={[styles.card, { backgroundColor: colors['background-light'] }]}>
              <Text weight="bold" style={styles.businessName}>
                {item.name}
              </Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text color="text-light" style={styles.hours}>
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
  },
  card: {
    borderRadius: 10,
    padding: defaultTheme.spacing.md,
    marginBottom: defaultTheme.spacing.sm,
    elevation: 3,
  },
  businessName: {
    fontSize: defaultTheme.fontSizes.subtitle,
    marginBottom: defaultTheme.spacing.xs,
  },
  description: {
    fontSize: defaultTheme.fontSizes.body,
    marginBottom: defaultTheme.spacing.xs,
  },
  hours: {
    fontSize: defaultTheme.fontSizes.caption,
  },
});

export default CategoryDetail;
