import { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native'
import { AppContext } from '@/shared';
import { Spinner } from '@/components';
import auth from '@react-native-firebase/auth';

const Loading = () => {
  const appContext = useContext(AppContext);

  const checkCredentials = async () => {
    try {
      auth().onAuthStateChanged(user => {
        if(user) {
          appContext.setIsSignedIn(true);
        }
      })
    } catch (ex) {
      // TODO: handle error
    } finally {
      appContext.setIsLoading(false);
    }
  }
  
  useEffect(() => {
    checkCredentials();
  }, []);

  return (
    <View style={styles.main}>
      <Spinner size="large" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})