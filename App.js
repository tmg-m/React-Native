import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';

export default function App() {
  const [btnPress,setBtnPress] = useState('Not pressed');
  function handleBtnPressIn(){
    setBtnPress('Pressed')
  }
  function handleBtnPressOut(){
    setBtnPress('notPressed')
  }

  const [btnPress2,setBtnPress2] = useState(false);
  function handleBtnPress2(){
    setBtnPress2((btnPress2) => !btnPress2)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>My first React Native App</Text>
      <StatusBar style="auto" />

      <TextInput style={styles.myInputText}>Type Here</TextInput>

      <Button title='Button (cannot use styles)'/>

      <Pressable style={styles.myBtn}>
        <Text style={styles.textNorm}>Button with styles</Text>
      </Pressable>

      <View style={styles.demoContainer}>
        <Pressable style={styles.myBtnFun} onPressIn={handleBtnPressIn} onPressOut={handleBtnPressOut}>
          <Text>Button with function</Text>
        </Pressable>
        <Text>{btnPress}</Text>
      </View>
      
      <View style={styles.demoContainer}>
        <Pressable style={styles.myBtnFun} onPress={handleBtnPress2}>
          <Text>Buttin Toggle Y/N</Text>
        </Pressable>
        <View>
          {btnPress2 
            ? <Text>Toggle: YES</Text> 
            : <Text>Toggle: NO</Text>
          }
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'orange',
    borderRadius:-20,
  },
  demoContainer: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  myInputText: {
    paddingVertical:10,
    paddingHorizontal: 50,
    marginVertical:10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'purple',
  },
  myBtn: {
    paddingVertical:10,
    paddingHorizontal: 50,
    marginBottom: 10,
    backgroundColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'red',
  },
  textNorm : {
    color: 'white',
  },
  myBtnFun: {
    paddingVertical:10,
    paddingHorizontal: 50,
    backgroundColor: 'lightgrey',
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'blue',
  },
});
