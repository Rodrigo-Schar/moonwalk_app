import { View, Text, Button, Image, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Article } from '@/models/Article';
import {ColorContext} from '@/shared';

function CardArticle(properties: Article) {
  const themeStyles = useStyles();
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
    <View style={themeStyles.container}>
        <Image style={themeStyles.image} source={{ uri: properties.imageUrl }}/>
        <View style={themeStyles.textContainer}>
            <Text style={themeStyles.title}>{properties.title}</Text>
            <Text style={themeStyles.subTitle}>{properties.newsSite}{isToday}</Text>
        </View>
    </View>
  )
}

export default CardArticle

const useStyles = () => {
  const { secondaryColor, primaryColorText } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      height: 100,
      justifyContent: 'space-between',
      backgroundColor: secondaryColor,
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
      color: primaryColorText,
      fontWeight: 'bold',
      fontSize: 16
    },
    subTitle: {
      color: primaryColorText,
      fontSize: 12
    },
  });
}

