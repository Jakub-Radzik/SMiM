import {StyleSheet, View} from 'react-native';
import {HomeTabProps} from '../types/routes';
import {PRODUCTS} from '../mockData';
import {Category, Product} from '../types';
import {ProductCarousel} from '../components/ProductCarousel';
import {MainProduct} from '../components/MainProduct';

export const HomeScreen = ({navigation, route}: HomeTabProps) => {
  const onProductPress = (product: Product) => {
    navigation.navigate('ProductDetails', {product});
  };

  const onChevronPress = () => {
    navigation.navigate('Products', {category: Category.CAT1});
  };

  const product = PRODUCTS.Elektronika[0];

  return (
    <View style={styles.screen}>
      <MainProduct product={product} onPress={() => onProductPress(product)} />
      <ProductCarousel
        title={'Polecamy'}
        products={PRODUCTS.Elektronika}
        category={Category.CAT1}
        onProductPress={onProductPress}
        onChevronPress={onChevronPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});
