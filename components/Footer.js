import React from 'react';
import {Ionicons} from 'react-native-vector-icons'
import {StyleSheet, View} from 'react-native'

import Home from '../screens/Home'


export default function Footer(props) {
/*
const {Navigator, Screen}= createStackNavigator()
    const goTo = ()=> {
       console.log(props)
    }*/
  return (
    
        <View style={styles.footer}>
                    <Ionicons  name='notifications' size={34}/>  
                    <Ionicons  name='home' size={34}/>  
                    <Ionicons  name='chatbubbles' size={34}/>  
                    <Ionicons name='heart' size={34}/>  
    </View>
    
  );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'grey',
        color: 'white',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft:  20,
        paddingRight:  20,
    }
})
