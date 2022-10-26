import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Article } from '@/models/Article'

function CardArticle(properties: Article) {

  var isToday = ""
  const now = new Date();
  const dateStr = now.toISOString()
  const actualDate = new Date(dateStr)
  const articleDate = new Date(properties.publishedAt)
  const actualDateWithoutTime = new Date(actualDate.getTime());
  const articleDateWithoutTime = new Date(articleDate.getTime());
  actualDateWithoutTime.setUTCHours(0,0,0,0)
  articleDateWithoutTime.setUTCHours(0,0,0,0)

  if(actualDateWithoutTime.getTime() === articleDateWithoutTime.getTime()) {
    isToday = " - Today"
  }

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: properties.imageUrl }}/>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{properties.title}</Text>
            <Text>{properties.newsSite}{isToday}</Text>
        </View>
    </View>
  )
}

export default CardArticle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: 2,
    alignItems:'center',
  },
  image: {
    marginLeft: 10,
    margin: 5,
    width: '30%',
    height: '80%',
    borderRadius: 10
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
});