import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ChevronButton} from './ChevronButton';
import {Title} from './Title';
import {VideoType} from '../types';
import {useState} from 'react';
import VideoComponent from './Video';

type Props = {
  onChevronPress: () => void;
  video: VideoType;
};

export const ThumbnailVideo = ({video}: Omit<Props, 'onChevronPress'>) => {
  const [playing, setPlaying] = useState(false);
  return playing ? (
    <VideoComponent
      repeat
      controls
      source={video.source}
      paused={!playing}
      onEnd={() => setPlaying(false)}
      style={styles.video}
    />
  ) : (
    <TouchableOpacity onPress={() => setPlaying(true)}>
      <Image source={video.thumbnail} style={styles.video} />
    </TouchableOpacity>
  );
};

export const TeaserVideo = ({video, onChevronPress}: Props) => {
  return (
    <View style={styles.view}>
      <View style={styles.titleWrapper}>
        <Title title={'Zobacz nasze recenzje'} />
      </View>
      {video.thumbnail ? (
        <ThumbnailVideo video={video} />
      ) : (
        <VideoComponent
          source={video}
          repeat
          paused={false}
          style={styles.video}
        />
      )}
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
