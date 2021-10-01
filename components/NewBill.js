import React, { useState } from "react";
import { View, Text, Button, StyleSheet,TextInput } from "react-native";
export default function Settings({ navigation }) {
      const [text,setText]=useState('');
 return (
    <View style={{flex:2}}>
      <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
        <Text style={styles.paragraph}>Please add new bill</Text>

        <TextInput
          style={styles.textbox}
          placeholder="eg: Lunch 15$"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />

      </View>

      <View style={{flex:1}}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>

    </View>
 );
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
