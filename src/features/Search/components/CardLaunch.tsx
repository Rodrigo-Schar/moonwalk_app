import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Event } from '@/models/Event'
import { Launch } from '@/models/Launch'
import { Constants } from '@/shared'
import {ColorContext} from '@/shared';

function CardLaunch(properties: Launch) {
  const themeStyles = useStyles();
  //const netDate = new Date(properties.net)
  //var day = netDate.getDate();
  //var monthStr = Constants.monthNames[netDate.getMonth()];
  //var date = ` ${day}  ${monthStr}`
  const date = new Date(properties.net)

  return (
    <View style={themeStyles.container}>
        <View style={themeStyles.textContainer}>
          <Text style={themeStyles.title}>{properties.name}</Text>
          <Text style={themeStyles.dateText}>{date.toLocaleString()}</Text>
        </View>
    </View>
  )
}

export default CardLaunch

const useStyles = () => {
  const { secondaryColor, primaryColorText } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      height: 120,
      justifyContent: 'space-between',
      backgroundColor: secondaryColor,
      flexDirection: 'row',
      marginVertical: 2,
      alignItems:'center',
    },
    dateText: {
      color: primaryColorText,
      fontSize: 12
    },
    textContainer: {
      width: '80%',
      flexShrink: 1,
      alignItems: 'flex-start',
      padding: 4,
    },
    title: {
      color: primaryColorText,
      fontWeight: 'bold',
      fontSize: 16
    },
  });
}