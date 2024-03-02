import {StyleSheet} from 'react-native';
import {SwipeableGallery} from '../components/SwipeableGallery';
import {airpods} from '../img/airpods';

export const ProductDetailsScreen = () => {
  return <SwipeableGallery images={airpods} />;
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
