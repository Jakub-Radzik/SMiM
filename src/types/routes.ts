import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Category, Product} from '.';

export type RootStackParamList = {
  Home: undefined;

  Products: {category: Category};
  ProductDetails: {product: Product};
  Videos: undefined;
  Video: {video: string};
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type ProductDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

export type VideosScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Videos'
>;

export type VideoScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Videos'
>;

export type ProductsTabProps = NativeStackScreenProps<
  RootStackParamList,
  'Products'
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
