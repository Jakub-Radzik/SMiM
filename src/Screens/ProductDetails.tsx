import {StyleSheet} from 'react-native';
import {SwipeableGallery} from '../components/SwipeableGallery';
import {ProductDetailsScreenProps} from '../types/routes';

export const ProductDetailsScreen = ({
  route,
  navigation,
}: ProductDetailsScreenProps) => {
  const {product} = route.params;
  return <SwipeableGallery images={product.images.gallery} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
