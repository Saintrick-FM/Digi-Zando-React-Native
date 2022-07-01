import React from 'react';
import {createStackNavigator} from 'react-navigation/stack'
import {NavigationContainer} from 'react-navigation/native'

import Home from './screens/Home'

export default function RootNavigation() {
    // Script 
    const Stack = createStackNavigator()
    const screenOptions= {
        headerShown: false
    }
    // Render JSX
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
