import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Product} from '../types';

type Props = {item: Product; onPress: () => void};

export const ProductItem = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Image
        source={item.images?.thumbnail}
        style={{width: '100%', height: 150}}
      />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    minHeight: 200,
    padding: 5,
    alignItems: 'center',
    gap: 10,
  },
});
