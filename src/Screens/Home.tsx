import {ScrollView, StyleSheet} from 'react-native';
import {HomeTabProps} from '../types/routes';
import {PRODUCTS} from '../mockData';
import {Category, Product} from '../types';
import {ProductCarousel} from '../components/ProductCarousel';
import {MainProduct} from '../components/MainProduct';
import {TeaserVideo} from '../components/TeaserVideo';
import {airpodsVideo} from '../video';

export const HomeScreen = ({navigation, route}: HomeTabProps) => {
  const onProductPress = (product: Product) => {
    navigation.navigate('ProductDetails', {product});
  };

  const onChevronPress = () => {
    navigation.navigate('Products', {category: Category.CAT1});
  };

  const onVideosChevronPress = () => {
    navigation.navigate('Videos');
  };

  const product = PRODUCTS.Elektronika[0];

  return (
    <ScrollView style={styles.screen}>
      <MainProduct product={product} onPress={() => onProductPress(product)} />
      <ProductCarousel
        title={'Polecamy'}
        products={PRODUCTS.Elektronika}
        category={Category.CAT1}
        onProductPress={onProductPress}
        onChevronPress={onChevronPress}
      />
      <TeaserVideo onChevronPress={onVideosChevronPress} video={airpodsVideo} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {},
});
