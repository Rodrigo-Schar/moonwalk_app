import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, RefreshControl } from 'react-native'
import { Button, CountDown, PreviewLaunch } from '@/components';
import { AppContext, StorageConstants } from '@/shared'
import auth from '@react-native-firebase/auth';
import { getNextLaunches } from '@/services';
import { Launch } from '@/models/Launch';

const HomeScreen = () => {
    const appContext = useContext(AppContext);
    const [launches, setLaunches] = useState<Launch[]>([])
    const [done, setDone] = useState<boolean>(false)

    const signOut = () => {
      const result = auth().signOut()
      if(result != null) {
        appContext.setIsSignedIn(false);
      }
    };

    useEffect(() => {
      getNextLaunches()
        .then(items => {
          setLaunches(items.results)
          setDone(true)
        })
    }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {done && (
        <ScrollView
        scrollEnabled={true}
        style={{ width: '100%' }}
        contentContainerStyle={{ flex: 1 }}>
          <PreviewLaunch launch={launches[0]} />
          <CountDown dateStr={launches[0].net} />
        </ScrollView>
      )}
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    button: {
        width: '80%',
    },
})