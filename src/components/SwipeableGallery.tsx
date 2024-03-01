import {useEffect, useRef, useState} from 'react';
import {Image, PanResponder, StyleSheet, Text, View} from 'react-native';

interface Props {
  images?: string[];
  link?: string;
  startNumber?: number;
  endNumber?: number;
}

const SWIPE_THRESHOLD = 10; // Minimum swipe distance for number change

export const SwipeableGallery = ({}: Props) => {
  const [number, setNumber] = useState(10);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = Array.from({length: 55 - 10}, (_, i) => {
    const paddedIndex = String(i + 10).padStart(4, '0'); // Padding index with leading zero if needed
    return `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/battery/large_2x/${paddedIndex}.jpg`;
  });

  useEffect(() => {
    const prefetchImages = async () => {
      try {
        const imagePromises = images.map(imageUrl => {
          return Image.prefetch(imageUrl);
        });
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error prefetching images:', error);
      }
    };

    prefetchImages();
  }, []);

  useEffect(() => {
    console.log('Number:', number);
  }, [number]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Check if the swipe distance is significant enough
        if (Math.abs(gestureState.dx) > SWIPE_THRESHOLD) {
          // Swipe right, increment number
          if (gestureState.dx > 0) {
            setNumber(prevNumber => (prevNumber >= 54 ? 10 : prevNumber + 1));
          }
          // Swipe left, decrement number
          else {
            setNumber(prevNumber => (prevNumber <= 10 ? 54 : prevNumber - 1));
          }
        }
      },
      onPanResponderRelease: () => {},
    }),
  ).current;

  if (!imagesLoaded) {
    // Return a loading indicator or placeholder while images are being preloaded
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Image
        source={{
          uri: images[number],
        }}
        style={styles.image}
      />
    </View>
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
});
