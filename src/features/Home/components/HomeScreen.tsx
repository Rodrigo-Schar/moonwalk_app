import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, TouchableOpacity, Alert, Text } from 'react-native'
import { CountDown, PreviewLaunch } from '@/components';
import { getNextLaunches } from '@/services';
import { Launch } from '@/models/Launch';
import { ColorContext } from '@/shared';
import { useAppDispatch } from '@/hooks';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { logout } from '@/features/Signin';

const HomeScreen = () => {
  const themeStyles = useStyles();
  const [launches, setLaunches] = useState<Launch[]>([])
  const [done, setDone] = useState<boolean>(false)
  const dispatch = useAppDispatch();

  const signOut = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "YES", onPress: () => { dispatch(logout());} }
      ]
    );
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
      <View style={themeStyles.menu}>
        <TouchableOpacity onPress={signOut}>
          <AntDesign name="logout" style={themeStyles.menuIcon} />
        </TouchableOpacity>
      </View>
      <View style={themeStyles.contentContainer}>
        {done && launches != undefined && (
          <ScrollView
          scrollEnabled={true}
          style={{ width: '100%' }}
          contentContainerStyle={{ flex: 1 }}>
            <PreviewLaunch launch={launches[1]} />
            <CountDown dateStr={launches[1].net} />
          </ScrollView>
        )}
        {done && launches == undefined && (
          <View style={themeStyles.noData}>
            <Text style={themeStyles.noDataText}>Sorry! By now there are not Launches Available</Text>
          </View>
        )}
      </View>
    </View> 
  )
}

export default HomeScreen

const useStyles = () => {
  const {
    backgroundColor, primaryColorText
  } = useContext(ColorContext);

  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      flex: 1,
    },
    contentContainer: {
      backgroundColor: backgroundColor,
      flex: 1,
      alignItems: 'center'
    },
    menu: {
      flexDirection: 'row',
      marginVertical: 10,
      marginEnd: 20, 
      justifyContent: 'flex-end',
    },
    menuIcon: {
      color: primaryColorText,
      fontSize: 20
    },
    noData: {
      backgroundColor: backgroundColor,
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      marginHorizontal: 20,
    },
    noDataText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: primaryColorText,
    },
  })
}