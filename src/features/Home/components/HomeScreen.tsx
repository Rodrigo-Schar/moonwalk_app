import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { CountDown, PreviewLaunch } from '@/components';
import { AppContext } from '@/shared'
import auth from '@react-native-firebase/auth';
import { getNextLaunches } from '@/services';
import { Launch } from '@/models/Launch';
import {ColorContext} from '@/shared';

const HomeScreen = () => {
  const themeStyles = useStyles();
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
    <View style={themeStyles.container}>
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

const useStyles = () => {
  const {
    backgroundColor
  } = useContext(ColorContext);

  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      flex: 1,
      alignItems: 'center'
    },
    button: {
        width: '80%',
    },
  })
}