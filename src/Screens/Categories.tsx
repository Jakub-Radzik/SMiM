import {FlatList, Text, View} from 'react-native';
import {CategoriesTabProps} from '../types/routes';
import {ListItem} from '../components/ListItem';
import {CATEGORIES} from '../mockData';

export const CategoriesScreen = ({navigation, route}: CategoriesTabProps) => {
  return (
    <View>
      <Text>Categories Screen</Text>
      <FlatList
        renderItem={({item}) => (
          <ListItem
            item={item.title}
            onPress={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        )}
        data={CATEGORIES}
      />
    </View>
  );
};
