import React, { useState } from "react";
import { View, Text, Button, StyleSheet,TextInput } from "react-native";

export default function Visualized({ navigation }){
  return(
    <View style={{flex:1,textAlign: 'center',justifyContent: 'center'}}>
      <View>
        <Text>
          Intend to be a visualized figure of bills
        </Text>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>

      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  textbox:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});