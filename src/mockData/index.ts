import {airpods} from '../img/airpods';
import {appleWatch} from '../img/applewatch';
import {pendrive, pendriveMain} from '../img/pendrive';
import {Category, Product} from '../types';

export const CATEGORIES = [
  {title: Category.CAT1, icon: '📱'},
  {title: Category.CAT2, icon: '💄'},
  {title: Category.CAT3, icon: '🛍️'},
];

export const PRODUCTS: Record<Category, Product[]> = {
  [Category.CAT1]: [
    {
      id: '2',
      title: 'Apple Watch',
      price: 100,
      images: {
        thumbnail: appleWatch[0],
        gallery: appleWatch,
      },
    },
    {
      id: '1',
      title: 'AirPods Pro',
      price: 100,
      images: {
        thumbnail: airpods[3],
        gallery: airpods,
      },
    },
    {
      id: '3',
      title: 'Pendrive',
      price: 100,
      images: {
        thumbnail: pendriveMain,
        gallery: pendrive,
      },
    },
  ],
  [Category.CAT2]: [],
  [Category.CAT3]: [],
};
