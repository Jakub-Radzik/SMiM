import {ImageSourcePropType} from 'react-native';

export enum Category {
  CAT1 = 'Elektronika',
  CAT2 = 'Kosmetyki',
  CAT3 = 'X',
}

export type Product = {
  id: string;
  title: string;
  price: number;
  images: {
    thumbnail: ImageSourcePropType;
    gallery: ImageSourcePropType[];
  };
};
