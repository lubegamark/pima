import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Text, StyleSheet, View} from 'react-native';
import {colors, fontSize} from '../config/styles';

const styles = StyleSheet.create({
    textContainerSmallCircle: {
        flexDirection: 'column',
        left: -5,
        width: 90,
        position: 'absolute',
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pointsSmallCircle: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: fontSize.medium,
        fontWeight: 'bold',
    },
    textSmallCircle: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: fontSize.verySmall,
        fontWeight: '300',
    },
});

export const SmallCircularUI = () =>


  <AnimatedCircularProgress
    size={80}
    width={10}
    fill={this.props.percentage}
    tintColor={this.props.color}
    backgroundColor={colors.grey}
  >
    {
                    (fill) => (
                      <View style={styles.textContainerSmallCircle}>
                        <Text style={styles.pointsSmallCircle}>0.8</Text>
                        <Text style={styles.textSmallCircle}>MIN</Text>
                      </View>
                    )
                }
  </AnimatedCircularProgress>;




export default SmallCircularUI;
