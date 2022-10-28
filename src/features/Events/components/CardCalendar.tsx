import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react';
import { Launch } from '@/models/Launch'
import { Constants } from '@/shared'
import {ColorContext} from '@/shared';

function CardCalendar(properties: Launch) {
  const themeStyles = useStyles();
  const netDate = new Date(properties.net)
  var day = netDate.getDate();
  var monthStr = Constants.monthNames[netDate.getMonth()];
  var date = ` ${day}  ${monthStr}`

  return (
    <View style={themeStyles.container}>
        <View style={themeStyles.imageContainer}>
          <Text style={themeStyles.dateText}>{date}</Text>
        </View>
        <View style={themeStyles.textContainer}>
          <Text style={themeStyles.title}>{properties.name}</Text>
          <Text style={themeStyles.station}>{properties.pad.name}</Text>
          <View style={themeStyles.place}>
            <Text style={themeStyles.placeName}>{properties.launch_service_provider.name}</Text>
          </View>
        </View>
    </View>
  )
}

export default CardCalendar

const useStyles = () => {
  const { primaryColorText, secondaryColor, accentBackground, accent } =
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
      imageContainer: {
        alignItems: 'center',
        backgroundColor: accentBackground,
        marginLeft: 10,
        margin: 5,
        width: '15%',
        height: '50%',
        borderRadius: 10
      },
      dateText: {
        color: primaryColorText,
        fontSize: 20
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
      station: {
        color: primaryColorText,
      },
      place: {
        color: primaryColorText,
        marginVertical: 10,
        backgroundColor: accent,
        borderRadius: 10,
      },
      placeName: {
        padding: 4,
        color: "#fff",
        fontSize: 14
      }
    });
}

