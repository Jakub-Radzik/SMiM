import Video, {FilterType, VideoProperties} from 'react-native-video';

const VideoComponent = (props: VideoProperties) => {
  return <Video filterEnabled filter={FilterType.FADE} {...props} />;
};

export default VideoComponent;
