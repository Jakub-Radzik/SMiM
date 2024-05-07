import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {VideosScreenProps} from '../types/routes';
import {Text} from '../components/Text';
import {VIDEOS} from '../video';
import VideoComponent from '../components/Video';

export const VideosScreen = ({navigation, route}: VideosScreenProps) => {
  return (
    <View>
      <FlatList
        data={VIDEOS}
        scrollEnabled
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Video', {
                video: item.source,
              })
            }>
            <View style={styles.row}>
              {item?.thumbnail ? (
                <Image source={item.thumbnail} style={styles.image} />
              ) : (
                <VideoComponent
                  source={item.source}
                  repeat
                  paused
                  style={styles.video}
                />
              )}
              <Text style={styles.name}>{item.title}</Text>
            </View>
          </TouchableOpacity>
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
    borderColor: '#a9a9a9',
  },
  name: {
    paddingHorizontal: 10,
  },
  video: {height: 100, width: 200},
  image: {height: 100, width: 200, resizeMode: 'contain'},
});
