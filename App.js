import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder='Username' autoFocus/>
      <TextInput style={styles.input} placeholder='Password' secureTextEntry/>
      <Button style={styles.button} title='Submit' onPress={() => alert('Logged in!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  }
});
