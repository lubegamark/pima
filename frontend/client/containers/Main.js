import React from 'react';
import {BigCircularUI} from '../components';
import {View} from 'react-native';
import {colors} from '../config/styles';
export default class Main extends React.Component {

    render() {

        return (

            <View>
                <BigCircularUI
                color={colors.secondaryDark}
                percentage={60}
                />
            </View>

        );
    }

}
