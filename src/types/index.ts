import {ImageSourcePropType} from 'react-native';

export enum Category {
  CAT1 = 'Elektronika',
  CAT2 = 'Kosmetyki',
  CAT3 = 'Numizmatyka',
}

export type VideoType = {
  title: string;
  source: string;
  thumbnail?: ImageSourcePropType;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  spec: Record<string, string>;
  rate: number;
  description: string;
  images: {
    thumbnail: ImageSourcePropType;
    gallery: ImageSourcePropType[];
  };
  video?: VideoType;
};
