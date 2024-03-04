import {FlatList, StyleSheet} from 'react-native';
import {CategoriesTabProps} from '../types/routes';
import {ListItem} from '../components/ListItem';
import {CATEGORIES} from '../mockData';
import {SafeAreaView} from 'react-native-safe-area-context';

export const CategoriesScreen = ({navigation, route}: CategoriesTabProps) => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});
