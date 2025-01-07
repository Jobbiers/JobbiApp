import React from 'react';
import { View, TextInput, Chip, Text, Icon, Icons } from '@jobbi/ui/src/components';
import useTheme from '@jobbi/ui/src/theme/useTheme';
import { FlatList, Image, StyleSheet } from 'react-native';
import { useSearch } from '../hooks/use-search';
import { defaultTheme } from '@jobbi/ui/src/theme/Theme';
import { CategoryDTO } from '../../../store/interfaces';
const { spacing, fontSizes } = defaultTheme;

const Search = () => {
  const { colors } = useTheme();
  const { categories, setSearchText, searchText, selectedFilters, setSelectedFilters, onFilter } =
    useSearch();

  const renderItem = ({ item }: { item: CategoryDTO }) => {
    const isSelected = selectedFilters.includes(item.id);
    return (
      <Chip
        onPress={() => onFilter(item.id)}
        style={[
          styles.item,
          {
            backgroundColor: !isSelected
              ? colors.backgroundVariant
              : colors['backgroundVariant-light'],
          },
        ]}
        title={item.name}
        textProps={{
          style: isSelected
            ? [styles.textChipSelected, { color: colors.background }]
            : styles.textChip,
        }}
        rightAccessory={
          isSelected && (
            <Icon type={Icons.Entypo} name="circle-with-cross" color="background" size={14} />
          )
        }
      />
    );
  };

  return (
    <View style={{ paddingHorizontal: spacing.md }}>
      <TextInput placeholderTx="search.placeHolderInput" onChangeText={setSearchText} />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: spacing.sm }}>
        <Chip
          title="Filtros"
          onPress={() => console.log('first')}
          style={[styles.filter, { borderColor: colors.contrast }]}
          color="background"
          textProps={{ style: styles.textFilter }}
          rightAccessory={<Icon type={Icons.Entypo} name="sound-mix" size={14} />}
        />
        <View
          style={{
            width: 2,
            height: '50%',
            marginHorizontal: spacing.md,
            backgroundColor: colors.contrast,
          }}
        />
        <FlatList
          data={categories}
          horizontal
          contentContainerStyle={{ marginVertical: spacing.md }}
          renderItem={renderItem}
        />
      </View>
      <View style={{ marginTop: spacing.md }}>
        <Text style={{ fontSize: fontSizes.subtitle, fontFamily: 'PublicSansBold' }}>
          Resultados de Búsqueda
        </Text>
      </View>
      <View style={{}}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <View
              style={{
                marginVertical: spacing.md,
                borderRadius: 8,
                overflow: 'hidden',
                flexDirection: 'row',
              }}
            >
              <Image
                source={{
                  uri: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
                }}
                style={{ width: 70, height: 70, borderRadius: 100 }}
              />
              <View style={{ padding: spacing.md, justifyContent: 'center' }}>
                <Text
                  style={{ fontSize: fontSizes.body, fontFamily: 'PublicSansRegular' }}
                  text="Gonzalo Delbazi"
                />
                <Text
                  style={{
                    fontSize: fontSizes.caption,
                    fontFamily: 'PublicSansRegular',
                    marginTop: spacing.sm,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filter: {
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textFilter: {
    textDecorationLine: 'underline',
    fontSize: fontSizes.caption,
    marginRight: spacing.xs,
  },
  textChip: {
    fontSize: fontSizes.caption,
  },
  textChipSelected: {
    fontSize: fontSizes.caption,
    marginRight: spacing.xs,
  },
  textResults: {
    fontSize: fontSizes.subtitle,
    fontFamily: 'PublicSansBold',
  },
});

export default Search;
