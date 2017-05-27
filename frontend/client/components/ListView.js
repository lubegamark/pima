import React from 'react';
import {ListView} from 'react-native';
import ListItem from './ListItem';
import {colors} from '../config/styles';

export default class ListViewSample extends React.Component {
  renderItem = (item) => {
    const color = item.number > 5 ? colors.primary : colors.secondary;
    return <ListItem reading={item} color={color} />;
  };

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.readings);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderItem}
      />
    );
  }
}
