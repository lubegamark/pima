import 'react-native';
import React from 'react';
import Main from '../../client/containers/Main';
import Index from '../../client/containers/index';
import renderer from 'react-test-renderer';

describe('actions', () => {

  it('Main renders correctly', () => {
    const tree = renderer.create(
      <Main/>
    );
  });

  it('Index renders correctly', () => {
    const tree = renderer.create(
      <Index/>
    );
  });

})
