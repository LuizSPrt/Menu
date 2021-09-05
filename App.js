import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator } from './src/StackNavigator';

 export default App = () => {
   return (
    <NavigationContainer >
       <MainStackNavigator />
     </NavigationContainer>
   );
 }


const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#06111C",
  },
  
});
