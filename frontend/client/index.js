import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class Main extends React.Component {


    render() {

        return (

            <View>
                <Text>{this.props.message}</Text>
            </View>

        );
    }

}
