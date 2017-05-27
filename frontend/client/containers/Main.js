import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';
import {BigCircularUI, SmallCircularUI, ListView} from '../components';
import {colors} from '../config/styles';
import {data, listening, reading} from '../selectors';
import {startListening} from '../actions';

const styles = StyleSheet.create({
  topContainerView: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
});

const mapStateToProps = createSelector(
  [data, listening, reading],
  (api, status, number) => ({
    api,
    status,
    number,
  }));

class Main extends React.Component {

  componentWillMount() {
    this.props.dispatch(startListening());
  }

  render() {
    return (

      <View>
        <View style={styles.topContainerView}>
          <SmallCircularUI
            color={colors.primary}
            percentage={40}
          />
          <BigCircularUI
            color={colors.secondaryDark}
            percentage={this.props.number}
          />
          <SmallCircularUI
            color={colors.secondary}
            percentage={40}
          />

        </View>
        <ListView />

      </View>

    );
  }

}

export default connect(mapStateToProps)(Main);