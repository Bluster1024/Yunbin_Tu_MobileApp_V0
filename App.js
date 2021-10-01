import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";
import NewBill from "./components/NewBill";
import Visualized from "./components/Visualized";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Today's Bill" component={NewBill} />
        <Stack.Screen name="Visualized" component={Visualized} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

