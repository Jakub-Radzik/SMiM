import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {Product} from '../types';
import {Title} from './Title';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  product: Product;
  onPress: () => void;
}

export const MainProduct = ({product, onPress}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <LinearGradient
        style={[styles.linearGradient, {paddingTop: top / 2}]}
        locations={[0, 0.7, 1]}
        colors={['#7a769f', '#4c669f', 'transparent']}>
        <FastImage source={product.images.thumbnail} style={styles.image} />
        <View style={styles.productDescription}>
          <Title title="Hit tygodnia!" style={{color: 'white'}} />
          <Text style={styles.product}>{product.title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  image: {
    width: '50%',
    height: 200,
    resizeMode: 'contain',
  },
  linearGradient: {
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  productDescription: {
    gap: 10,
    alignItems: 'flex-end',
    marginTop: -30,
  },
  product: {
    color: 'white',
    fontWeight: '500',
  },
});
