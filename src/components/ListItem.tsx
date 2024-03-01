import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ListItemProps {
  title: string;
  icon: string;
  onPress: () => void;
}

export const ListItem = ({title, icon, onPress}: ListItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.26,
  },
  text: {fontSize: 20, letterSpacing: 2},
  icon: {fontSize: 30},
});
