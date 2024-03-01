import {FlatList, StyleSheet, View} from 'react-native';
import {PRODUCTS} from '../mockData';
import {ProductsTabProps} from '../types/routes';
import {ProductItem} from '../components/ProductItem';
import {Product} from '../types';

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
        style={styles.list}
        contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <ProductItem
            item={item}
            key={item.id}
            onPress={() => onPress(item)}
          />
        )}
        data={products}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    width: '50%',
  },
});
