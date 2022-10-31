import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>My first React Native App</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.myText}>Type Here</TextInput>
      <Button style={styles.myBtn} title='Button'/>
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
  myText: {
    paddingVertical:10,
    paddingHorizontal: 50,
    marginVertical:10,
    borderWidth: '2',
    borderRadius: '8',
    borderColor: 'purple',
  },
});
