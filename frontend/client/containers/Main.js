import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BigCircularUI, SmallCircularUI, ListView} from '../components';
import {colors} from '../config/styles';

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

export default class Main extends React.Component {

  componentWillMount() {

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
            percentage={60}
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

