import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function App() {
  // Use States
  const [readOnly, setReadOnly] = useState(false);
  const [hidePassword, setHidePassword] = useState({
    isHidden: true,
    icon: 'eye',
  });
  const [form, setForm] = useState({
    submitted: false,
    username: '',
    password: '',
  });
  
  // Event Handlers
  function setPassword(password) {
    setForm(previousState => {
      return {
        ...previousState,
        password: password,
      }
    });
  }

  function setUsername(username) {
    setForm(previousState => {
      return {
        ...previousState,
        username: username,
      }
    });
  }

  function submitForm() {
    if (!form.submitted) {
      setReadOnly(true);
      if (!hidePassword.isHidden) togglePassword();
      setForm(previousState => {
        return {
          ...previousState,
          submitted: true,
        }
      });
    }
  }

  // Use effect triggers once form submitted is true
  useEffect(() => {
    console.log(form);
  }, [form.submitted]);

  function togglePassword() {
    if (!form.submitted) {
      setHidePassword(previousState => {
        return {
          isHidden: !previousState.isHidden, 
          icon: previousState.isHidden ? 'eye-off' : 'eye',
        }
      });
    }
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
          <TextInput style={[styles.input, styles.username]} onChangeText={input => setUsername(input)} onSubmitEditing={() => {this.passwordInput.focus()}} ref={input => {this.usernameInput = input}} placeholder='Username' enterKeyHint='next' readOnly={readOnly} blurOnSubmit={false} autoFocus/>
        </View>

        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <View style={[styles.icon, styles.inputIcon]}>
            <Ionicons name='lock-closed' size={24}/>
          </View>
          <TextInput style={[styles.input, styles.password]} onChangeText={input => setPassword(input)} onSubmitEditing={() => {this.passwordInput.blur()}} ref={input => {this.passwordInput = input}} placeholder='Password' enterKeyHint='enter' secureTextEntry={hidePassword.isHidden} readOnly={readOnly} blurOnSubmit={false} selectTextOnFocus/>
          <Pressable style={[styles.icon, styles.togglePassword, {backgroundColor: hidePassword.isHidden ? 'silver' : 'dimgrey'}]} onPress={togglePassword} disabled={form.submitted}>
            <Ionicons name={hidePassword.icon} size={24} color={hidePassword.isHidden ? 'black' : 'white'}/>
          </Pressable>
        </View>

        {/* Error Message */}
        <Text style={styles.error}>Error</Text>

        {/* Submit Button */}
        <View style={styles.submit}>
          <Pressable style={styles.button} onPress={submitForm} disabled={form.submitted}>
            <Text style={[styles.buttonContent, {display: form.submitted ? 'none' : 'flex'}]}>SUBMIT</Text>
            <ActivityIndicator style={[styles.buttonContent, {display: form.submitted ? 'flex' : 'none'}]} size='small' color='white'/>
          </Pressable>
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

  button: {
    backgroundColor: 'dodgerblue',
  },

  buttonContent: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
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
