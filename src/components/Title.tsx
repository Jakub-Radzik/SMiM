import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

interface Props {
  title: string;
  style?: StyleProp<TextStyle>;
}

export const Title = ({title, style}: Props) => {
  return <Text style={[style, styles.title]}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
