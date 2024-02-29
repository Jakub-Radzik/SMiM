import {StyleSheet, Text, View} from 'react-native';

interface ListItemProps {
  item: string;
  onPress: () => void;
}

export const ListItem = ({item, onPress}: ListItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 20,
  },
});
