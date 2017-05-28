import React from 'react';
import moment from 'moment';
import {View, StyleSheet, Text} from 'react-native';
import {colors, fontSize} from '../config/styles';

const styles = StyleSheet.create({
  listItemContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 12,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da',
  },
  textContainer: {
    flexDirection: 'column',
  },
  topText: {
    fontSize: fontSize.medium,
    color: colors.black,
  },
  bottomText: {
    fontSize: fontSize.verySmall,
    color: colors.grey,
  },
  mainText: {
    textAlign: 'right',
    fontSize: fontSize.big,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});

const ListItem = (props) => <View style={styles.listItemContainer}>
  <View style={styles.textContainer}>
    <Text style={styles.topText}>
      {moment(props.reading.timeStamp).fromNow()}
    </Text>
    <Text style={styles.bottomText}>
      {moment(props.reading.timeStamp).format('MMMM Do YYYY, h:mm:ss a')}
    </Text>
  </View>
  <Text
    style={[styles.mainText, {color: props.color}]}
  > {Math.round(100 * (props.reading.number / 10))}
  </Text>
</View>;


export default ListItem;
