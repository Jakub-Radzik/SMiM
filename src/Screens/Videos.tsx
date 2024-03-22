import {FlatList, StyleSheet, View} from 'react-native';
import {VideosScreenProps} from '../types/routes';
import Video from 'react-native-video';
import {Text} from '../components/Text';
import video from '../video/sample_video.hevc.mp4';
import {VIDEOS} from '../video';

export const VideosScreen = ({navigation, route}: VideosScreenProps) => {
  return (
    <View>
      <FlatList
        data={VIDEOS}
        scrollEnabled
        renderItem={({item}) => (
          <View style={styles.row}>
            <Video source={item.source} repeat paused style={styles.video} />
            <Text style={styles.name}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 120,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  name: {
    paddingHorizontal: 10,
  },
  video: {height: 100, width: 200},
});
