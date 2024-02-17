import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
  const [showPassword, setShowPassword] = useState(true);
  const [eyeIcon, setEyeIcon] = useState('eye');

  function togglePassword() {
    setShowPassword(() => !showPassword);
    setEyeIcon(() => eyeIcon == 'eye' ? 'eye-off' : 'eye');
  }

  return (
    // App Layout
    <View style={[styles.appContainer, styles.border]}>
      <StatusBar style='auto'/>

      {/* Login Layout */}
      <View style={[styles.login, styles.border]}>
        <Text style={styles.title}>Login</Text>

        {/* Username Input */}
        <View style={styles.usernameContainer}>
          <View style={[styles.icon, styles.inputIcon]}>
            <Ionicons name='person' size={24}/>
          </View>
          <TextInput style={[styles.input, styles.username]} placeholder='Username' autoFocus/>
        </View>

        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <View style={[styles.icon, styles.inputIcon]}>
            <Ionicons name='lock-closed' size={24}/>
          </View>
          <TextInput style={[styles.input, styles.password]} placeholder='Password' secureTextEntry={showPassword}/>
          <Pressable style={[styles.icon, styles.togglePassword]} onPress={togglePassword}>
            <Ionicons name={eyeIcon} size={24} />
          </Pressable>
        </View>

        {/* Error Message */}
        <Text style={styles.error}>Error</Text>

        {/* Submit Button */}
        <View style={styles.submit}>
          <Button title='Submit'/>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  border: {
    borderWidth: 1,
    borderColor: 'red',
  },
  
  error: {
    color: 'red',
    marginTop: 10,
  },
  
  icon: {
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 5,
    paddingRight: 10,
    height: 40,
  },

  inputIcon: {
    borderWidth: 1,
    borderRightWidth: 0,
  },
  
  login: {
    width: '80%',
  },

  password: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  
  passwordContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  
  submit: {
    marginTop: 20,
  },
  
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  togglePassword: {
    borderWidth: 1,
  },

  username: {
    borderLeftWidth: 0,
  },

  usernameContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
});
