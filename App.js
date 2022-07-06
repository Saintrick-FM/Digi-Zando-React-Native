import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider} from 'native-base'

import Home from './screens/Home'
import Cart from './screens/Cart'

//import RootNavigation from '@react-navigation/native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function App() {

  // Script Logic
    const {Navigator, Screen}= createStackNavigator()
    const screenOptions= {
        headerShown: false
    }
// Render JSX
  return (
    <NativeBaseProvider >
    <NavigationContainer>
    <Navigator initialRouteName='Home'>
      <Screen name='Home' options={screenOptions} component={Home}/>
      <Screen name='Cart' component={Cart}/>
    </Navigator> 
    {/* <RootNavigation initialRouteName='Home'> 
    </RootNavigation>*/}
   
    </NavigationContainer>
    
    {/* <View style={styles.container}>
    <Home/>
    </View> */}
    
    </NativeBaseProvider>
  );
}

/*Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  },
});*/
