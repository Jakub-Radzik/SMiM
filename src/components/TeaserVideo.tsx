import {StyleSheet, View} from 'react-native';
import {ChevronButton} from './ChevronButton';
import Video from 'react-native-video';
import video from '../video/sample_video.hevc.mp4';
import {Title} from './Title';

type Props = {
  onChevronPress: () => void;
};

export const TeaserVideo = ({onChevronPress}: Props) => {
  return (
    <View style={styles.view}>
      <View style={styles.titleWrapper}>
        <Title title={'Zobacz nasze recenzje'} />
      </View>
      <Video source={video} repeat paused={false} style={styles.video} />
      <ChevronButton title={'Zobacz wszystkie'} onPress={onChevronPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  titleWrapper: {
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  video: {
    width: '100%',
    height: 200,
  },
});
