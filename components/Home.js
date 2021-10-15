import React , { useState, useEffect }from "react";
import { View, Text, Button,StyleSheet,TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


  const initialList = [
  {
    name: 'Charlie Card',
    cost: '20',
  },
  {
    name: 'Drink',
    cost: '15',
  },
];

function Home({ navigation }) {


const [name, setName] = React.useState('');
const [cost, setCost] = React.useState('');
const [list, setList] = React.useState(initialList);

  useEffect(() => {readData()},[])
  
  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }

  const storeData = async()=>{
      try{
          const jsonValue = JSON.stringify(list)
          await AsyncStorage.setItem('@bill', jsonValue)
      }catch(e){
        alert('fail to store');
        console.log(e)
      }
  }

  const readData =async() =>{
    try{
      const jsonValue = await AsyncStorage.getItem('@bill')
      let data=null;
      console.log(jsonValue);
      if(jsonValue!=null){
        data=JSON.parse(jsonValue);
        setList(Array.from(data));
        console.log(list);
      }
    }catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  function handleDescription(event) {
    setName(event.target.value);
  }

  function handleCost(event) {
    setCost(event.target.value);
  }
 
  function handleAdd() {
    const newList = list.concat({name,cost});
 
    setList(newList);
  }

 return (
    <View style={{flex:2}}>
      <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
        <Text style={styles.header}>Bill statistic</Text>

        <View style={{flexDirection:'row'}}>
          
          <View style={styles.list}>
          {Array.from(list).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
          </View>

          <View style={styles.list}>
          {Array.from(list).map((item) => (
            <li key={item.id}>{item.cost}</li>
          ))}
          </View>

        </View>

      </View>

      <View style={{flex:1}}>

     

        <TextInput value={name} placeholder="Type description here  Eg: Lunch" style={styles.textbox} onChange={handleDescription} />
        <TextInput value={cost} placeholder="Type cost here  Eg: 15" style={styles.textbox} onChange={handleCost} />
        <Button  title="Add NEW BILL" color='lightblue' onPress={() => handleAdd()}/>


        <Button
          color='rgb(186,134,255)' title='Save Profile to Memory'
          onPress = {() => {
          storeData()
          }}
                />
        <Button
          color='rgb(118,134,255)' title='Clear memory'
          onPress = {() => {
                      console.log('clearing memory');
                      clearAll()
                      }}
        />        

        <Button title="Today's Bill" onPress={() => navigation.navigate("Today's Bill")} />
        <Button title="Visualized" color='darkslateblue' onPress={() => navigation.navigate("Visualized")} />
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
  header: {
    margin: 24,
    marginTop: 0,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list:{
    margin: 24,
    alignItems: 'flex.flex-start',
    justifyContent: 'flex.flex-start',
    listStyleType: "none"
  },
});

export default Home


