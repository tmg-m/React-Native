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

  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>My first React Native App</Text>
      <StatusBar style="auto" />

      <TextInput style={styles.myInputText}>Type Here</TextInput>

      <Button title='Button (cannot use styles)'/>

      <Pressable style={styles.myBtn}>
        <Text style={styles.textNorm}>Button with styles</Text>
      </Pressable>

      <Pressable style={styles.myBtnFun} onPressIn={handleBtnPressIn} onPressOut={handleBtnPressOut}>
        <Text>Button with function</Text>
      </Pressable>
      <Text>{btnPress}</Text>
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
