import { useContext, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, LabelButton, Input, LabelError } from '@/components';
import { RootStackParamList } from '@/navigation';
import { AppContext } from '@/shared';
import auth from '@react-native-firebase/auth';
import {ColorContext} from '@/shared';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SignIn = ({ navigation }: SignInProps) => {
  const themeStyles = useStyles();
  const { setIsSignedIn } = useContext(AppContext);
  const { setIsBusy } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorLabel, setErrorLabel] = useState(false);
  const logo = require('@/assets/logologin.png');

  const goToSignUp = () => {
    navigation.replace('SignUp');
  };

  const validateFields = () => {
    if(email == "") {
      setError('Please fill the field with your email');
      return false
    }
    if(password == "") {
      setError('Please fill the field with your password');
      return false
    }
    return true
  }

  const signInWithUser = async () => {
    try {
      setIsBusy(true);
      setErrorLabel(false)
      setError("")
      const validate = validateFields()
      if(validate) {
        const authResult = await auth().signInWithEmailAndPassword(email, password).catch(
          error => {
            if (error.code === 'auth/user-not-found') {
              setErrorLabel(true)
              setError('There is no user corresponding to the given email.');
            }
        
            if (error.code === 'auth/wrong-password') {
              setErrorLabel(true)
              setError('The password is invalid!');
            }
          }
        )
        if(authResult != null) {
          setIsSignedIn(true);
        }
      }
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <View style={themeStyles.container}>
      <View style={themeStyles.logo}>
        <Image resizeMode='stretch' style={themeStyles.logo} source={logo} />
      </View>
      <View style={themeStyles.content}>
        <Input placeholderText='Email' value={email} onChangeText={setEmail} />
        <Input secureTextEntry={true} placeholderText='Password' value={password} onChangeText={setPassword} />
        <LabelError isActive={errorLabel} text={error} />
        <LabelButton text="Don't have an account yet? Sign Up" onPress={goToSignUp} />
        <Button style={themeStyles.button} text="Sign In" onPress={signInWithUser} />
      </View>
    </View>
  )
}

export default SignIn

const useStyles = () => {
  const { backgroundColor } =
    useContext(ColorContext);

    return StyleSheet.create({
      container: {
        backgroundColor: backgroundColor,
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
  };