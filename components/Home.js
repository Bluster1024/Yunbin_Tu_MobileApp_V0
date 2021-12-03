import React , { useState, useEffect }from "react";
import { View, Text, Button,StyleSheet,TextInput,FlatList,ImageBackground } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialList = [
  { 
    id : 1,
    name: 'Charlie Card',
    cost: '20',
    Date: '2021-01-01'
  },
  { 
    id: 2,
    name: 'Drink',
    cost: '15',
    Date: '2021-01-01'
  },
];
const image = { uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' };

function Home({ navigation }) {


const [name, setName] = React.useState('');
const [cost, setCost] = React.useState('');
const [list, setList] = React.useState(initialList);
const [refreshing, setRefreshing] = React.useState(false)


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

  function generateId() {
      return name+cost+getCurrentDate()+1000*Math.random()
  }
 
  function handleAdd() {
    let id=generateId();
    const newList = list.concat({id:id,name:name,cost:cost,Date:getCurrentDate()});

    setList(newList);
    console.log(newList);
  }

  const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return year+'-'+month + '-' + date;
}

const Item = ({ item }) => {
  return (
    <View style={{flexDirection:'row'}}>
      <View style={styles.row}><Text style={styles.text}>{item.name}</Text></View>
      <View style={styles.row}><Text style={styles.text}>{item.cost}</Text></View>
      <View style={styles.row}><Text style={styles.text}>{item.Date}</Text></View>
    </View>
  );
}

const renderItem = ({ item }) => (
    <Item item={item} style={{width: '30%'}}/>
  );

const handleRefresh = () => {
  setRefreshing(prevState => !prevState)
}

 return (
    <View >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
      <View style={{alignItems: 'center',justifyContent: 'center'}}>
        <Text style={styles.header}>Bill statistic</Text>

      
        <View style={styles.flatList}>
          <FlatList
            contentContainerStyle={styles.flatListColumn}
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      </View>

      <View>
        <TextInput value={name} placeholder="Type description here  Eg: Lunch" style={styles.textbox} onChangeText={name => setName(name)} />
        <TextInput value={cost} placeholder="Type cost here  Eg: 15" style={styles.textbox} onChangeText={cost => setCost(cost)} />
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
      </ImageBackground>
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
  },
  flatList:{
    justifyContent:'space-between',
    width:'50%'
    
  },
  flatListColumn:{
    justifyContent: "space-between"
  },
  row:{
    flex:1,alignItems: 'center',justifyContent: 'center',   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    color:'white'
  }
});

export default Home


