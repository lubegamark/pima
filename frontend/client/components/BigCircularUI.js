import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Text,StyleSheet,View} from 'react-native';
import {colors,fontSize} from '../config/styles';

export default class BigCircularUI extends React.Component {


    render() {

        return (

            <AnimatedCircularProgress
                size={150}
                width={15}
                fill={this.props.percentage}
                tintColor={this.props.color}
                backgroundColor={colors.grey}>
                {
                    (fill) => (
                        <View style={styles.textContainerBigCircle}>
                            <Text style={styles.pointsBigCircle}>10</Text>
                            <Text style={styles.textBigCircle}>CURRENT</Text>
                        </View>
                    )
                }
            </AnimatedCircularProgress>

        );
    }

}
const styles = StyleSheet.create({
    textContainerBigCircle:{
      flexDirection:'column',
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
        fontSize:fontSize.veryBig,
        fontWeight: 'bold'
    },
    textBigCircle: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize:fontSize.medium,
        fontWeight: "300"
    }
});
