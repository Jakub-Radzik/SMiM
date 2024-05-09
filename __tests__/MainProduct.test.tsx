import React from 'react';
import renderer from 'react-test-renderer';
import {it, expect, jest} from '@jest/globals';
import {MainProduct} from '../src/components/MainProduct';
import {appleWatch} from '../src/img/applewatch';

const MOCKED_PRODUCT = {
  id: '2',
  title: 'Apple Watch',
  price: 399,
  description:
    "Apple Watch to inteligentny zegarek, który jest doskonałym towarzyszem dla użytkowników iPhone'ów. Dzięki niemu możesz śledzić swoją aktywność fizyczną, monitorować stan zdrowia, odbierać powiadomienia, kontrolować muzykę, korzystać z aplikacji i wiele więcej. Jego wytrzymała konstrukcja zapewnia wodoodporność do 50 metrów, co pozwala na używanie go nawet podczas pływania. Wyposażony w najnowszy system operacyjny watchOS 8 oraz szeroki zakres sensorów, w tym GPS, EKG i barometr, Apple Watch umożliwia śledzenie i analizowanie różnych aspektów Twojego życia codziennego.",
  rate: 4,
  spec: {
    Kolor: 'Space Gray',
    Wodoodporność: 'Do 50 metrów',
    Ekran: 'Retina Always-On',
    Pamięć: '32 GB',
    Łączność: 'Wi-Fi, Bluetooth, LTE',
    'System operacyjny': 'watchOS 8',
    Sensory: 'GPS, Akcelerometr, Żyroskop, EKG, Barometr',
    Kompatybilność: 'iPhone 6s lub nowszy z iOS 15',
    Wymiary: '40 mm lub 44 mm',
  },
  images: {
    thumbnail: appleWatch[0],
    gallery: appleWatch,
  },
};
const MOCKED_ONPRESS = jest.fn();

it('Main', () => {
  const render = renderer
    .create(<MainProduct product={MOCKED_PRODUCT} onPress={MOCKED_ONPRESS} />)
    .toJSON();

  expect(render).toMatchSnapshot();
});
