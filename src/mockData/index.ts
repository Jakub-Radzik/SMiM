import {Category} from '../types';

export const CATEGORIES = [
  {title: Category.CAT1, icon: '📱'},
  {title: Category.CAT2, icon: '💄'},
  {title: Category.CAT3, icon: '🛍️'},
];

export const PRODUCTS = {
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
      thumbnail: 'https://via.placeholder.com/150',
    },
  })),
  [Category.CAT2]: [],
  [Category.CAT3]: [],
};
