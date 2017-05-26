import React from 'react';
import {BigCircularUI,SmallCircularUI} from '../components';
import {View,StyleSheet} from 'react-native';
import {colors} from '../config/styles';
export default class Main extends React.Component {

    render() {

        return (

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

        );
    }

}

const styles = StyleSheet.create({
    topContainerView:{
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    }
});