import { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, LabelButton, Input } from '@/components';
import { RootStackParamList } from '@/navigation';
import { AppContext, StorageConstants } from '@/shared';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SignIn = ({ }: SignInProps) => {
  const { setIsSignedIn } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logo = require('@/assets/logologin.png');

  const signInWithUser = async () => {
    try {
      
    } finally {
      
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.logo}>
        <Image resizeMode='stretch' style={styles.logo} source={logo} />
      </View>
      <View style={styles.content}>
        <Input placeholderText='Email' value={email} onChangeText={setEmail} />
        <Input placeholderText='Password' value={password} onChangeText={setPassword} />
        <LabelButton text="Don't have an account yet? Sign Up" onPress={signInWithUser} />
        <Button style={styles.button} text="Sign In" onPress={signInWithUser} />
      </View>
    </View>
  )
}

export default SignIn

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