import {airpods} from '../img/airpods';
import {appleWatch} from '../img/applewatch';
import {doge} from '../img/doge';
import {eth} from '../img/eth';
import {krem, kremMain} from '../img/krem';
import {pendrive, pendriveMain} from '../img/pendrive';
import {pomatka, pomatkaMain} from '../img/pomatka';
import {swietlik} from '../img/swietlik';
import {xrp} from '../img/xrp';
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
      description: 'OpisOpisOpisOpisOpis',
      spec: {
        Kolor: 'Czarny',
        Pamięć: '32GB',
        Wodoodporność: 'IP68',
        Bateria: '24h',
      },

      images: {
        thumbnail: appleWatch[0],
        gallery: appleWatch,
      },
    },
    {
      id: '1',
      title: 'AirPods Pro',
      price: 100,
      description: 'Opis',
      spec: {},
      images: {
        thumbnail: airpods[3],
        gallery: airpods,
      },
    },
    {
      id: '3',
      title: 'Pendrive',
      price: 100,
      description: 'Opis',
      spec: {},
      images: {
        thumbnail: pendriveMain,
        gallery: pendrive,
      },
    },
  ],
  [Category.CAT2]: [
    {
      id: '21',
      title: 'Krem do golenia',
      price: 100,
      description: 'Opis',
      spec: {},
      images: {
        thumbnail: kremMain,
        gallery: krem,
      },
    },
    {
      id: '22',
      title: 'Pomatka',
      price: 100,
      description: 'Opis',
      spec: {},
      images: {
        thumbnail: pomatkaMain,
        gallery: pomatka,
      },
    },
    {
      id: '23',
      title: 'Świetlik',
      price: 100,
      description: 'Opis',
      spec: {},
      images: {
        thumbnail: swietlik[0],
        gallery: swietlik,
      },
    },
  ],
  [Category.CAT3]: [
    {
      id: '31',
      title: 'Dogecoin',
      price: 100,
      description: 'Opis',
      spec: {},
      images: {
        thumbnail: doge[1],
        gallery: doge,
      },
    },
    {
      id: '32',
      title: 'Ethereum',
      price: 100,
      description: 'Opis',
      spec: {},
      images: {
        thumbnail: eth[1],
        gallery: eth,
      },
    },
    {
      id: '33',
      title: 'Ripple',
      price: 100,
      description: 'Opis',
      spec: {},
      images: {
        thumbnail: xrp[1],
        gallery: xrp,
      },
    },
  ],
};
