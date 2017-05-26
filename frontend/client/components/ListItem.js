import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {colors,fontSize} from '../config/styles';

const ListItem =(props) => <View style={styles.listItemContainer}>
    <View style={styles.textContainer}>
        <Text style={styles.topText}>2 seconds ago</Text>
        <Text style={styles.bottomText}>15/07/201721:23:09</Text>
    </View>
    <Text style={styles.mainText}>0.08</Text>
</View>;

const styles = StyleSheet.create({
    listItemContainer:{
        paddingLeft:16,
        paddingRight:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    textContainer:{
        flexDirection:'column',
    },
    topText:{
        fontSize:fontSize.medium,
        color:colors.black
    },
    bottomText:{
        fontSize:fontSize.verySmall,
        color:colors.grey
    },
    mainText:{
      textAlign:'right',
        fontSize:fontSize.veryBig,
        fontWeight:'bold',
        alignSelf:'flex-end',
    }
});

export default ListItem;