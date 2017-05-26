import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default class BigCircularUI extends React.Component {


    render() {

        return (

            <View>
                <AnimatedCircularProgress
                    size={120}
                    width={15}
                    fill={100}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"/>
            </View>

        );
    }

}
