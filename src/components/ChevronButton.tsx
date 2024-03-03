import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export const ChevronButton = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.chevron}>{title}</Text>
        <Text style={styles.chevron}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  chevron: {
    fontSize: 14,
  },
});
