import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';
import {BigCircularUI, SmallCircularUI, ListView} from '../components';
import {colors} from '../config/styles';
import {data, listening, reading, maximumReading, minimumReading} from '../selectors';
import {startListening, storeReading} from '../actions';

const styles = StyleSheet.create({
  topContainerView: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 64,
    paddingBottom: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
});

const mapStateToProps = createSelector(
  [data, listening, reading, minimumReading, maximumReading],
  (api, status, number, min, max) => ({
    api,
    status,
    number,
    min,
    max,
  }));

class Main extends React.Component {

  componentWillMount() {
    this.props.dispatch(startListening());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.number !== this.props.number) {
      this.props.dispatch(storeReading(nextProps.number));
    }
  }
  render() {
    const {number, min, max} = this.props;

    const mainColor = number > 5 ? colors.secondaryDark : colors.primaryDark;
    return (

      <View>
        <View style={styles.topContainerView}>
          <SmallCircularUI
            color={colors.primary}
            percentage={min}
            text="MIN"
          />
          <BigCircularUI
            color={mainColor}
            percentage={this.props.number}
          />
          <SmallCircularUI
            color={colors.secondary}
            percentage={max}
            text="MAX"
          />
        </View>
        <ListView readings={this.props.api} />

      </View>

    );
  }

}

export default connect(mapStateToProps)(Main);
