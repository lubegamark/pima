import React from 'react';
import {Provider} from 'react-redux';
import {Main} from './containers';
import store from './store';

export default class Index extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>

    );
  }

}
