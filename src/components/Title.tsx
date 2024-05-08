import {StyleSheet, TextStyle} from 'react-native';
import {Text} from './Text';

interface Props {
  title: string;
  style?: TextStyle;
}

export const Title = ({title, style}: Props) => {
  return <Text style={{...styles.title, ...style}}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
