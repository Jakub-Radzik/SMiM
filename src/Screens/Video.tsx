import {StyleSheet, View} from 'react-native';
import {VideoScreenProps} from '../types/routes';
import VideoComponent from '../components/Video';

export const VideoScreen = ({navigation, route}: VideoScreenProps) => {
  return (
    <View>
      <VideoComponent
        source={route.params.video}
        repeat
        paused={false}
        controls
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    height: 300,
    width: '100%',
  },
});
