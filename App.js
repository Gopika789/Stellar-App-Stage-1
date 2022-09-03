import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-navigation-gesture-handler';
import * as React from 'react'
import { NavigationContainer, navigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home"
import StarMapScreen from "./screens/StarMap"
import DailyPicScreen from "./screens/DailyPic"
import SpaceCraftScreen from "./screens/StarMap"

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown : false
        }}>
          <Stack.Screen name='Home' component = {HomeScreen}/>
          <Stack.Screen name='StarMap' component={StarMapScreen}/>
          <Stack.Screen name='StarMap' component={DailyPicScreen}/>
          <Stack.Screen name='StarMap' component={SpaceCraftScreen}/>

          </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;