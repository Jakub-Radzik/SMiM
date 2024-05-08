import {FlatList, StyleSheet, View} from 'react-native';
import {PRODUCTS} from '../mockData';
import {ProductsTabProps} from '../types/routes';
import {ProductItem} from '../components/ProductItem';
import {Product} from '../types';
import {Logo} from '../components/Logo';

export const ProductsScreen = ({navigation, route}: ProductsTabProps) => {
  const {category} = route.params;
  const products = PRODUCTS[category];

  const onPress = (product: Product) => {
    navigation.navigate('ProductDetails', {product});
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        renderItem={({item}) => (
          <ProductItem
            item={item}
            key={item.id}
            onPress={() => onPress(item)}
          />
        )}
        data={products}
      />
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  columnWrapper: {
    gap: 10,
  },
});
