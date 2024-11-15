import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {  useEffect } from 'react';
import DBcontroller from './model/DBcontroller';


export default function App() {

  let dbController = null ;


useEffect(() => {

 dbController = new DBcontroller();

  dbController.openDB().then(() => {
    console.log('Database opened');
  }
  ).catch((error) => {
    console.log('Error opening database');
    console.log(error);
  });




}, []);


  const handleSave = async () => {
    
    console.log('Save button pressed');

    await dbController.saveUser("giuseppe")

    console.log("User saved");


  };

  const handleGetFirst =  async ()  => {
    console.log('Get First button pressed');
    let first = await dbController.getFirstUser();
    console.log("First user retrieved", first);

  }

  const handleGetAll =  async () => {
    console.log('Get All button pressed');
    let all = await dbController.getAllUsers();
    console.log("All users retrieved", all);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
        <Button title="Get First" onPress={handleGetFirst} />
        <Button title="Get All" onPress={handleGetAll} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -25 }], // Adjust this value based on the height of your buttons
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
