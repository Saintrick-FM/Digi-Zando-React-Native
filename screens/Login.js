import React from 'react'
import {View, StatusBar, Text, TextInput} from 'react-native'

export default function Login() {
  return (
    <View style={{ flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',}}>

        <Text>Sign in First</Text>
        <TextInput placeholder='Enter email' />
        <TextInput placeholder='Enter password' />
     
    </View>
  );
}
/*
const styles = StyleSheet.create({
  container: {
   
  },
  form: {
     
  }
});
*/

