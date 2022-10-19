import { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native'

import { AppContext, StorageConstants } from '@/shared';

const Loading = () => {
  const appContext = useContext(AppContext);

  const checkCredentials = async () => {
    try {
      
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