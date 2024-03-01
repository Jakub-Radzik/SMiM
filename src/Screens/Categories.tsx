import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CategoriesTabProps} from '../types/routes';
import {ListItem} from '../components/ListItem';
import {CATEGORIES} from '../mockData';

export const CategoriesScreen = ({navigation, route}: CategoriesTabProps) => {
  return (
    <View>
      <FlatList
        style={styles.list}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            icon={item.icon}
            onPress={() => {
              navigation.navigate('Products', {category: item.title});
            }}
          />
        )}
        data={CATEGORIES}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});
