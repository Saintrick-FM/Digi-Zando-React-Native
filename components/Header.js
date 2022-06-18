import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, StatusBar} from 'react-native'
import {Ionicons} from 'react-native-vector-icons'


export default function Header(){
    return(
         
        <View>
            <StatusBar style={{backgroundColor : 'red'}}> 
            
            </StatusBar> 
        
           <View style={styles.header}>
                <View style={styles.header__icons}>
                    <Ionicons name='menu' size={35}/>  
                    <Text style={{marginLeft:20, fontSize:19, fontWeight:'bold', marginRight:'auto'}}>Home</Text>
                    <Ionicons name='cart' size={30}/>  
                    <Ionicons style={{marginRight:4, marginLeft:17}} name='person' size={28}/>  
                </View>  
                <View style={styles.searchBar}>
                    <TextInput placeholder='Search'/>
                </View>
           </View>
        
        </View>
        
    )
}
 const styles = StyleSheet.create({
     header:{
         backgroundColor:'grey',
         width:'100%',
         right: 0,
         left: 0,
         padding: 8,
         
     },
header__icons:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 4,
    
},
   searchBar:{
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        borderRadius: 10,
        padding: 12,
        color: 'white',
        fontSize: 40
    }

 })