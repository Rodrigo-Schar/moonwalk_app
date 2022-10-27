import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Event } from '@/models/Event'
import { Launch } from '@/models/Launch'
import { Constants } from '@/shared'

function CardCalendar(properties: Launch) {
  const netDate = new Date(properties.net)
  var day = netDate.getDate();
  var monthStr = Constants.monthNames[netDate.getMonth()];
  var date = ` ${day}  ${monthStr}`

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{properties.name}</Text>
          <Text>{properties.pad.name}</Text>
          <View style={styles.place}>
            <Text style={styles.placeName}>{properties.launch_service_provider.name}</Text>
          </View>
        </View>
    </View>
  )
}

export default CardCalendar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: 2,
    alignItems:'center',
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: "#005eff",
    marginLeft: 10,
    margin: 5,
    width: '15%',
    height: '50%',
    borderRadius: 10
  },
  dateText: {
    color: "#fff",
    fontSize: 20
  },
  textContainer: {
    width: '80%',
    flexShrink: 1,
    alignItems: 'flex-start',
    padding: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  place: {
    marginVertical: 10,
    backgroundColor: "#005eff",
    borderRadius: 10,
  },
  placeName: {
    padding: 4,
    color: "#fff",
    fontSize: 14
  }
});