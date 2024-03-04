import {PropsWithChildren} from 'react';
import {StyleSheet, Text as T, TextStyle} from 'react-native';

interface Props {
  style?: TextStyle;
}

export const Text = ({children, style: s}: PropsWithChildren<Props>) => {
  const style = {
    ...s,
    ...styles.text,
  };

  return <T style={style}>{children}</T>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Trebuchet MS',
  },
});
