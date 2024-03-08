import {ScrollView, StyleSheet, View} from 'react-native';
import {SwipeableGallery} from '../components/SwipeableGallery';
import {ProductDetailsScreenProps} from '../types/routes';
import {Text} from '../components/Text';
import {Title} from '../components/Title';
import LinearGradient from 'react-native-linear-gradient';

export const ProductDetailsScreen = ({
  route,
  navigation,
}: ProductDetailsScreenProps) => {
  const {product} = route.params;
  const {
    images: {gallery},
    title,
    price,
  } = product;
  return (
    <ScrollView>
      <LinearGradient locations={[0, 1]} colors={['transparent', '#fff']}>
        <SwipeableGallery images={gallery} />
      </LinearGradient>
      <View style={styles.top}>
        <Title title={title} />
        <Text style={styles.price}>{price} $</Text>
      </View>
      <View style={styles.specWrapper}>
        <View style={styles.spec}>
          <Text style={styles.price}>{price} $</Text>
          <Text style={styles.price}>{price} $</Text>
          <Text style={styles.price}>{price} $</Text>
          <Text style={styles.price}>{price} $</Text>
          <Text style={styles.price}>{price} $</Text>
        </View>
      </View>
      <View style={styles.specWrapper}>
        <Title title={'Opis'} />
        <Title title={'Opis'} />
        <Title title={'Opis'} />
        <Title title={'Opis'} />
      </View>
    </ScrollView>
  );
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
  top: {
    height: 200,
    backgroundColor: '#fff',
    padding: 20,
    gap: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  specWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  spec: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#a9a9a9',
  },
});
