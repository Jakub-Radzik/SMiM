import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined;

  Place: {placeId: number};
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type PlaceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Place'
>;

export type BottomTabParamList = {
  Home: undefined;
  Categories: undefined;
};

export type HomeTabProps = BottomTabScreenProps<BottomTabParamList, 'Home'>;

export type CategoriesTabProps = BottomTabScreenProps<
  BottomTabParamList,
  'Categories'
>;
