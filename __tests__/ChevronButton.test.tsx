import React from 'react';
import renderer from 'react-test-renderer';
import {it, expect} from '@jest/globals';
import {ChevronButton} from '../src/components/ChevronButton';

const TITLE = 'Title';

it('chevron snapshot test', () => {
  const render = renderer
    .create(<ChevronButton title={TITLE} onPress={() => {}} />)
    .toJSON();

  expect(render).toMatchSnapshot();
});
