import { useState, useEffect, useContext } from 'react';
import { View, Image, StyleSheet, Animated, Text } from 'react-native'
import { articleObj } from '@/shared';
import { Article } from '@/models/Article';
import { useRoute } from '@react-navigation/native';
import {ColorContext} from '@/shared';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchDetailArticle = () => {
  const themeStyles = useStyles();
  const [scrollY] = useState(new Animated.Value(0));
  const [article, setArticle] = useState<Article>(articleObj)
  const IMAGE_HEIGHT = 400;
  const route = useRoute()

  useEffect(() => {
    const data = route.params;
    const json = JSON.stringify(data);
    const parsed = JSON.parse(json);
    setArticle(parsed);
  }, []);

  const ImageScale = scrollY.interpolate({
    inputRange: [-100, 0, 200],
    outputRange: [1.4, 1.2, 1],
    extrapolate: "clamp",
  });

  return (
    <View style={themeStyles.container}>
      <Image
        style={themeStyles.image}
        source={{ uri: article.imageUrl }} />
        <Animated.ScrollView
        contentContainerStyle={{ paddingTop: IMAGE_HEIGHT }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
      >
      <View style={themeStyles.content}>
          <Text style={themeStyles.title} >{article.title}</Text>
          <Text style={themeStyles.subTitle}>Summary</Text>
            <View>
              <View style={{ marginTop: 10 }}>
                <Text style={themeStyles.summary}>{article.summary}</Text>
              </View>
            </View>
            <View style={themeStyles.launchTime}>
              <AntDesign name='clockcircleo' style={{ color: 'black', fontSize: 25, padding: 1}}/>
              <Text style={themeStyles.launchText}>{new Date(article.publishedAt).toLocaleString()}</Text>
            </View>
            <View style={themeStyles.launchTime}>
              <AntDesign name='filetext1' style={{ color: 'black', fontSize: 25, padding: 1}}/>
              <Text style={themeStyles.launchText}>{article.newsSite}</Text>
            </View>
        </View>
      </Animated.ScrollView>
    </View>
  )
}

export default SearchDetailArticle

const useStyles = () => {
  const { backgroundColor, primaryColorText, placeholderColor } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      overflow: "hidden"
    },
    content: {
      backgroundColor: backgroundColor,
      borderRadius: 20
    },
    launchTime: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginVertical: 10,
      width: "80%",
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignSelf: "center",
      alignItems: 'center',
      justifyContent: "space-evenly",
    },
    launchText: {
      color: "#000000",
    },
    image: {
      height: 400,
      width: '100%',
      position: 'absolute',
      background: '#888',
    },
    centerItems: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    title: {
      color: primaryColorText,
      fontWeight: 'bold',
      fontSize: 26,
      textAlign: 'center',
      marginHorizontal: 15
    },
    subTitle: {
      marginTop: 20,
      color: primaryColorText,
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'left',
      marginHorizontal: 10
    },
    summary: {
      color: primaryColorText,
      justifyContent: 'center',
      marginHorizontal: 10
    }
  })
}