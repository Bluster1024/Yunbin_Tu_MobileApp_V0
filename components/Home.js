import React from "react";
import { View, Text, Button,StyleSheet,TextInput } from "react-native";


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
const [list, setList] = React.useState(initialList);

  function handleChange(event) {
    setName(event.target.value);
  }
 
  function handleAdd() {
    const res = name.split(" ");
    const newList = list.concat({ name:res[0],cost:res[1] });
 
    setList(newList);
  }

 return (
    <View style={{flex:2}}>
      <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
        <Text style={styles.header}>Bill statistic</Text>

        <View style={{flexDirection:'row'}}>

          <View style={styles.list}>
          {list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
          </View>

          <View style={styles.list}>
          {list.map((item) => (
            <li key={item.id}>{item.cost}</li>
          ))}
          </View>

        </View>

      </View>

      <View style={{flex:1}}>

     

        <TextInput value={name} placeholder="Type here  Eg: Lunch 15" style={styles.textbox} onChange={handleChange} />
        <Button  title="Add NEW BILL" color='lightblue' onPress={() => handleAdd()}>
        </Button>

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


