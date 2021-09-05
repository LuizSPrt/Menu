import React from "react";
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../src/componentes/Home";
import Simples from "../src/componentes/Simples";
import Botao from "../src/componentes/Botao";
import Contador from "./componentes/Contador";



function SimplesScreen() {
  return (
    <View>
      <Simples texto="Passando parametro" />
    </View>
  );
}


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#06111C",
  },
  headerTintColor: "#BB2020",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Botão" component={Botao} />
      <Stack.Screen name="Simples" component={SimplesScreen} />   
    </Stack.Navigator>
  );
}

export { MainStackNavigator};