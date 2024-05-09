import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {Product} from '../types';
import {Title} from './Title';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useEffect, useRef} from 'react';
import {Text} from './Text';

interface Props {
  product: Product;
  onPress: () => void;
}

export const MainProduct = ({product, onPress}: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const pulseAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [pulseAnim]);

  const {top} = useSafeAreaInsets();
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <LinearGradient
        style={[styles.linearGradient, {paddingTop: top / 2}]}
        locations={[0, 0.7, 1]}
        colors={['#7a769f', '#4c669f', 'transparent']}>
        <Animated.View
          style={{
            width: '100%',
            opacity: fadeAnim,
            marginLeft: -90,
          }}>
          <FastImage
            source={product.images.thumbnail as unknown as Source}
            style={styles.image}
          />
        </Animated.View>
        <View style={styles.productDescription}>
          <Animated.Text style={{transform: [{scale: pulseAnim}]}}>
            <Title
              title="Hit tygodnia!"
              style={{color: 'white', fontSize: 40}}
            />
          </Animated.Text>
          <Text style={styles.product}>{product.title}</Text>
          <Text style={styles.price}>{product.price} $</Text>
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
    width: '100%',
    height: 300,
    zIndex: 2,
    marginTop: 20,
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
    marginTop: -100,
    marginLeft: -170,
  },
  product: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  price: {
    color: '#F4B168',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
  },
});
