import Intro from './Intro'
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Profile from './Profile';
import UserProfile from './UserProfile';
import NewPassword from './NewPassword';
import Messages from './Messages';

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

 
  
  return (
    <NavigationContainer>
    <Stack.Navigator >

    <Stack.Screen 
      name="Intro" 
      component={Intro}
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen 
      name="Login" 
      component={Login}
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen 
      name="Register" 
      component={Register}
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen 
      name="Home" 
      component={Home}
      options={{
        headerShown:false
      }}
    />
     <Stack.Screen 
      name="Messages" 
      component={Messages}
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen 
      name="UserProfile" 
      component={UserProfile}
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen 
      name="Profile" 
      component={Profile}
      options={{
        headerShown:false
      }}
    />
     <Stack.Screen 
      name="NewPassword" 
      component={NewPassword}
      options={{
        headerShown:false
      }}
    />
   


    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
