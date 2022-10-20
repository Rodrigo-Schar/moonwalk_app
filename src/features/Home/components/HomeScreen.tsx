import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@/components';
import { AppContext, StorageConstants } from '@/shared'
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
    const appContext = useContext(AppContext);
    const signOut = () => {
      const result = auth().signOut()
      if(result != null) {
        appContext.setIsSignedIn(false);
      }
    };

  return (
    <View>
      <Text>Home</Text>
      <Button style={styles.button} text="Sign Out" onPress={signOut} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    button: {
        width: '80%',
    },
})