import React from 'react';
import {ListView} from 'react-native';
import ListItem from './ListItem';

export default class ListViewSample extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4']),
    };
  }

  renderItem = () => <ListItem />
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
      />
    );
  }
}
