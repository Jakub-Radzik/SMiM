import {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {airpods} from '../img/airpods';

interface Props {
  images: ImageSourcePropType[];
  link?: string;
  startNumber?: number;
  endNumber?: number;
}

const SWIPE_THRESHOLD = 100; // Minimum swipe distance for number change

export const SwipeableGallery = ({images}: Props) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('Number:', number);
  }, [number]);

  const imagesCount = images.length;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Check if the swipe distance is significant enough
        if (Math.abs(gestureState.dx) > SWIPE_THRESHOLD) {
          // Swipe right, increment number
          if (gestureState.dx > 0) {
            // setNumber(prevNumber => (prevNumber >= 6 ? 0 : prevNumber + 1));
            setNumber(prevNumber =>
              prevNumber >= imagesCount - 1 ? 0 : prevNumber + 1,
            );
          }
          // Swipe left, decrement number
          else {
            setNumber(prevNumber =>
              prevNumber <= 0 ? imagesCount - 1 : prevNumber - 1,
            );
          }
        }
      },
      onPanResponderRelease: () => {},
    }),
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Image source={images[number]} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
