import {useEffect, useState} from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

interface Props {
  images: ImageSourcePropType[];
  link?: string;
  startNumber?: number;
  endNumber?: number;
}

const INTERVAL = 100; // Minimum swipe distance for number change
const IMAGE_HEIGHT = 300;
const IMAGE_WIDTH = Dimensions.get('window').width;

export const SwipeableGallery = ({images}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const clean = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  useEffect(() => {
    return () => {
      clean();
    };
  }, [intervalId]);

  const startInterval = (direction: 'forward' | 'backward') => {
    clean();

    const newIntervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (direction === 'forward') {
          return (prevIndex + 1) % images.length;
        } else {
          return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        }
      });
    }, INTERVAL);

    setIntervalId(newIntervalId);
  };

  const next = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const prev = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const stopInterval = () => {
    clean();
    setIntervalId(null);
  };

  return (
    <View style={styles.container}>
      <FastImage source={images[currentIndex]} style={styles.image} />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={prev}
          onLongPress={() => startInterval('forward')}
          onPressOut={stopInterval}></TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={next}
          onLongPress={() => startInterval('backward')}
          onPressOut={stopInterval}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
  },
  button: {
    width: '50%',
    height: IMAGE_HEIGHT,
  },
});
