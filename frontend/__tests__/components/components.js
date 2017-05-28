import 'react-native';
import React from 'react';
import BigCircularUI from '../../client/components/BigCircularUI';
import SmallCircularUI from '../../client/components/SmallCircularUI';
import ListItem from '../../client/components/ListItem';
import ListView from '../../client/components/ListView';

import renderer from 'react-test-renderer';

describe('actions', () => {

  it('Small Circle renders correctly', () => {
    const tree = renderer.create(
      <SmallCircularUI/>
    );
  });

  it('Big Circle renders correctly', () => {
    const tree = renderer.create(
      <BigCircularUI/>
    );
  });

  it('List Item renders correctly', () => {
    const tree = renderer.create(
      <ListItem/>
    );
  });

  it('List View renders correctly', () => {
    const tree = renderer.create(
      <ListView/>
    );
  })


});
