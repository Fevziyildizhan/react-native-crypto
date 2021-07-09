import React from 'react';
import { View,Button,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import Swiper from 'react-native-swiper'

import Crypto from './screens/Crypto';
import Home from "./screens/Home"
import ScreenA from './screens/ScreenA';
import ScreenC from './screens/ScreenC';

const Stack = createStackNavigator()

function App() {

  return (
  <Swiper>
  <NavigationContainer>
    <Stack.Navigator screenOptions = {{headerShown : false}} initialRouteName = "ScreenA">
      <Stack.Screen name = "Home" component = {Home}/>
      <Stack.Screen name = "Crypto" component = {Crypto} />
      <Stack.Screen name = "ScreenA" component = {ScreenA} />
      <Stack.Screen name = "ScreenC" component = {ScreenC} />
    </Stack.Navigator>
  </NavigationContainer>
  </Swiper>
  );
}
export default App
