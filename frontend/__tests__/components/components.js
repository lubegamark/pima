import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import BigCircularUI from '../../client/components/BigCircularUI';
import SmallCircularUI from '../../client/components/SmallCircularUI';
import ListItem from '../../client/components/ListItem';

describe('actions', () => {

  it('Small Circle renders correctly', () => {
    shallow(
      <SmallCircularUI/>
    );
  });

  it('Big Circle renders correctly', () => {
    shallow(
      <BigCircularUI/>
    );
  });

  it('List Item renders correctly', () => {
    shallow(
      <ListItem reading={{}} color={'#ffffff'}/>
    );
  });



});
