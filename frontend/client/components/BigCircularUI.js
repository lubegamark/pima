import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Text, StyleSheet, View} from 'react-native';
import {colors, fontSize} from '../config/styles';

const styles = StyleSheet.create({
  textContainerBigCircle: {
    flexDirection: 'column',
    left: 30,
    width: 90,
    position: 'absolute',
    top: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsBigCircle: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: fontSize.veryBig,
    fontWeight: 'bold',
    color: colors.black,
  },
  textBigCircle: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: fontSize.medium,
    fontWeight: '300',
  },
});

const BigCircularUI = (props) =>


  <AnimatedCircularProgress
    size={150}
    width={15}
    fill={Math.round(100 * (props.percentage / 10))}
    tintColor={props.color}
    backgroundColor={colors.grey}
  >
    {
                    (fill) => (
                      <View style={styles.textContainerBigCircle}>
                        <Text style={styles.pointsBigCircle}>{Math.round(fill)}</Text>
                        <Text style={styles.textBigCircle}>CURRENT</Text>
                      </View>
                    )
                }
  </AnimatedCircularProgress>;


export default BigCircularUI;

