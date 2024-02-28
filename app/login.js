import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';

export default function Page() {
  // Use Refs and Use States
  const usernameInput = useRef();
  const passwordInput = useRef();
  const [readOnly, setReadOnly] = useState(false);
  const [error, setError] = useState({
    type: '',
    message: '',
  });
  const [hidePassword, setHidePassword] = useState({
    isHidden: true,
    icon: 'eye',
  });
  const [form, setForm] = useState({
    submitted: false,
    username: '',
    password: '',
  });
  
  // Dynamic Styles
  const submitButton = {
    buttonColor: {backgroundColor: error.type != '' ? 'silver' : 'dodgerblue'},
    disableButton: form.submitted || error.type != '',
    loadingDisplay: {display: form.submitted ? 'flex' : 'none'},
    submitTextDisplay: {display: form.submitted ? 'none' : 'flex'},
  };
  const togglePasswordButtonStyle = {
    buttonColor: {backgroundColor: hidePassword.isHidden ? 'silver' : 'dimgrey'},
    iconColor: hidePassword.isHidden ? 'black' : 'white',
  };
  const validationFormStyle = {
    passwordIconColor: error.type== 'incompleteForm' && form.password == '' ? 'red' : 'black',
    passwordInputBorder: {borderColor: error.type == 'incompleteForm' && form.password == '' ? 'red' : 'black'},
    usernameIconColor: error.type== 'incompleteForm' && form.username == '' ? 'red' : 'black',
    usernameInputBorder: {borderColor: error.type == 'incompleteForm' && form.username == '' ? 'red' : 'black'},
  };

  // Event Handlers
  const focusPasswordInput = () => {
    passwordInput.current.focus();
  }

  function setPassword(input) {
    if (error.type != '' && form.username != '') {
      setError({
        type: '',
        message: '',
      });
    }
    setForm(previousState => {
      return {
        ...previousState,
        password: input,
      }
    });
  }

  function setUsername(input) {
    if (error.type != '' && form.password != '') {
      setError({
        type: '',
        message: '',
      });
    }
    setForm(previousState => {
      return {
        ...previousState,
        username: input,
      }
    });
  }
  
  function submitForm() {
    if (!form.submitted) {
      if (!hidePassword.isHidden) togglePassword();

      if (form.username == '' || form.password == '') {
        setError({
          type: 'incompleteForm',
          message: 'Please fill out required entry fields.',
        });

        if (form.username == '') {
          usernameInput.current.focus();
        } else {
          focusPasswordInput();
        }

      } else {
        setReadOnly(true);
        setForm(previousState => {
          return {
            ...previousState,
            submitted: true,
          }
        });
        console.log(form);
      }
    }
  }

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
      <StatusBar style='auto' animated/>

      {/* Login Layout */}
      <View style={[styles.login, styles.border]}>
        <Text style={styles.title}>Login</Text>

        {/* Username Input */}
        <View style={styles.usernameContainer}>
          <View style={[styles.icon, styles.inputIcon, validationFormStyle.usernameInputBorder]}>
            <Ionicons name='person' size={24} color={validationFormStyle.usernameIconColor}/>
          </View>
          <TextInput style={[styles.input, styles.username, validationFormStyle.usernameInputBorder]} onChangeText={setUsername} onSubmitEditing={focusPasswordInput} ref={usernameInput} placeholder='Username' enterKeyHint='next' blurOnSubmit={false} readOnly={readOnly} autoFocus/>
        </View>

        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <View style={[styles.icon, styles.inputIcon, validationFormStyle.passwordInputBorder]}>
            <Ionicons name='lock-closed' size={24} color={validationFormStyle.passwordIconColor}/>
          </View>
          <TextInput style={[styles.input, styles.password, validationFormStyle.passwordInputBorder]} onChangeText={setPassword} onSubmitEditing={submitForm} ref={passwordInput} placeholder='Password' enterKeyHint='enter' secureTextEntry={hidePassword.isHidden} blurOnSubmit={false} readOnly={readOnly} selectTextOnFocus/>
          <Pressable style={[styles.icon, styles.togglePassword, togglePasswordButtonStyle.buttonColor]} onPress={togglePassword} disabled={form.submitted}>
            <Ionicons name={hidePassword.icon} size={24} color={togglePasswordButtonStyle.iconColor}/>
          </Pressable>
        </View>

        {/* Error Message */}
        <Text style={styles.error}>{error.message}</Text>

        {/* Submit Button */}
        <View style={styles.submit}>
          <Pressable style={submitButton.buttonColor} onPress={submitForm} disabled={submitButton.disableButton}>
            <Text style={[styles.buttonContent, submitButton.submitTextDisplay]}>SUBMIT</Text>
            <ActivityIndicator style={[styles.buttonContent, submitButton.loadingDisplay]} size='small' color='white'/>
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
    paddingTop: 40,
    paddingHorizontal: 15,
  },

  border: {
    borderWidth: 1,
    borderColor: 'red',
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
