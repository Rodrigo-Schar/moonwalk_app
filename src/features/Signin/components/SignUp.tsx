import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useState, useContext } from 'react';
import { Button, LabelButton, Input, LabelError } from '@/components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';
import { AppContext } from '@/shared';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignUp = ( { navigation }: SignUpProps) => {
  const { setIsBusy } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [errorLabel, setErrorLabel] = useState(false);

  const goToSignIn = () => {
    navigation.replace('SignIn');
  };

  const validateFields = () => {
    if(name == "") {
      setError('Please fill the field with your name');
      return false
    }
    if(email == "") {
      setError('Please fill the field with your email');
      return false
    }
    if(password == "") {
      setError('Please fill the field with your password');
      return false
    }
    if(password != confirmPassword) {
      setError('Passwords do not match');
      return false
    }
    return true
  }

  const signUnWithCredentials = async () => {
    try {
      setErrorLabel(false)
      setError("")
      setIsBusy(true);
      const validate = validateFields()
      if(validate) {
        const authResult = await auth().createUserWithEmailAndPassword(email, password).catch(
          error => {
            if (error.code === 'auth/email-already-in-use') {
              setErrorLabel(true)
              setError('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              setErrorLabel(true)
              setError('That email address is invalid!');
            }
          }
        )
        if(authResult != null) {
          const result = await firestore().collection('Users').add({ id: authResult.user.uid, name: name, email: email })
          if (result != null) {
            navigation.replace('SignIn');
          }
        }
      }
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.content}>
        <Input placeholderText='Name' value={name} onChangeText={setName} />
        <Input placeholderText='Email' value={email} onChangeText={setEmail} />
        <Input secureTextEntry={true} placeholderText='Password' value={password} onChangeText={setPassword} />
        <Input secureTextEntry={true} placeholderText='Confirm Password' value={confirmPassword} onChangeText={setConfirmPassword} />
        <LabelError isActive={errorLabel} text={error} />
        <LabelButton text="Already have an account? Sign In" onPress={goToSignIn} />
        <Button style={styles.button} text="Sign Up" onPress={signUnWithCredentials} />
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    width: '80%',
  },
})