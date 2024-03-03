import {View, ScrollView, StyleSheet} from 'react-native';
import {Category, Product} from '../types';
import {ChevronButton} from './ChevronButton';
import {ProductCard} from './ProductCard';
import {Title} from './Title';

interface Props {
  title: string;
  products: Product[];
  category: Category;
  onProductPress: (product: Product) => void;
  onChevronPress: () => void;
}

export const ProductCarousel = ({
  title,
  products,
  category,
  onProductPress,
  onChevronPress,
}: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.titleWrapper}>
        <Title title={title} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            item={item}
            onPress={() => onProductPress(item)}
          />
        ))}
      </ScrollView>
      <ChevronButton title={'Zobacz wszystkie'} onPress={onChevronPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
  },
  titleWrapper: {
    paddingHorizontal: 5,
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
