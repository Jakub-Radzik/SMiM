import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Product} from '../types';
import FastImage from 'react-native-fast-image';

interface Props {
  item: Product;
  onPress: () => void;
}

export const ProductCard = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <View style={styles.imageWrapper}>
          <FastImage source={item.images.thumbnail} style={styles.image} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} $</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    alignItems: 'center',
    gap: 5,
  },
  imageWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  price: {
    fontSize: 14,
  },
});
