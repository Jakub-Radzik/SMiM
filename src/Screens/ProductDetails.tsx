import {ScrollView, StyleSheet, View} from 'react-native';
import {SwipeableGallery} from '../components/SwipeableGallery';
import {ProductDetailsScreenProps} from '../types/routes';
import {Text} from '../components/Text';
import {Title} from '../components/Title';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-regular-svg-icons';
import Video from 'react-native-video';

export const ProductDetailsScreen = ({
  route,
  navigation,
}: ProductDetailsScreenProps) => {
  const {product} = route.params;
  const {
    images: {gallery},
    title,
    price,
    description,
    spec,
    rate,
  } = product;
  return (
    <ScrollView>
      <LinearGradient locations={[0, 1]} colors={['transparent', '#fff']}>
        <SwipeableGallery images={gallery} />
      </LinearGradient>
      <View style={styles.top}>
        <Title title={title} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
          }}>
          {Array.from({length: 5}, (_, i) => (
            <FontAwesomeIcon
              icon={i < rate ? faStarSolid : faStar}
              color={i < rate ? '#f8d64e' : '#a9a9a9'}
              size={20}
            />
          ))}
        </View>
        <Text style={styles.price}>{price} $</Text>
      </View>
      <View style={styles.specWrapper}>
        <View style={styles.spec}>
          <Title title={'Specyfikacja'} style={{marginBottom: 10}} />
          {Object.entries(spec).map(([key, value]) => (
            <View style={styles.row}>
              <Text style={styles.specTitle}>{key}:</Text>
              <Text style={styles.specValue}>{value}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.specWrapper}>
        <Title title={'Opis'} style={{marginBottom: 10}} />
        <Text>{description}</Text>
      </View>
      {product.video && (
        <View style={styles.specWrapper}>
          <Title title={'Recenzja produktu'} style={{marginBottom: 10}} />
          <Video
            source={product.video?.source}
            repeat
            paused
            controls
            style={{height: 200, marginBottom: 20}}
          />
        </View>
      )}
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
    backgroundColor: '#fff',
    padding: 20,
    gap: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
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
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  specTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    width: 150,
  },
  specValue: {
    textAlign: 'left',
    flexWrap: 'wrap',
    width: 200,
  },
});
