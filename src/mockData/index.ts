import {airpods} from '../img/airpods';
import {Category, Product} from '../types';

export const CATEGORIES = [
  {title: Category.CAT1, icon: '📱'},
  {title: Category.CAT2, icon: '💄'},
  {title: Category.CAT3, icon: '🛍️'},
];

export const PRODUCTS: Record<Category, Product[]> = {
  [Category.CAT1]: [
    {
      id: '1',
      title: 'AirPods Pro',
      price: 100,
    },
    {
      id: '2',
      title: 'Apple Watch',
      price: 100,
    },
    {
      id: '3',
      title: 'iPhone 13 Pro',
      price: 100,
    },
  ].map(item => ({
    ...item,
    images: {
      thumbnail: airpods[0],
      gallery: airpods,
    },
  })),
  [Category.CAT2]: [],
  [Category.CAT3]: [],
};
