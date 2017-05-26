import React from 'react';
import {BigCircularUI, SmallCircularUI,ListView} from '../components';
import {View, StyleSheet} from 'react-native';
import {colors} from '../config/styles';
export default class Main extends React.Component {

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
                <ListView/>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    topContainerView: {
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }
});