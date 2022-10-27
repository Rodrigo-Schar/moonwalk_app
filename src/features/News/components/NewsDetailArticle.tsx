import { useContext, useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Text } from 'react-native'
import { AppContext, articleObj } from '@/shared';
import { Article } from '@/models/Article';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useRoute } from '@react-navigation/native';

const NewsDetailArticle = () => {
  const appContext = useContext(AppContext);
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
    <View style={{ overflow: "hidden" }}>
      <Image
        style={styles.image}
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
      <View style={{ backgroundColor: "#fff" }}>
          <Text style={styles.title} >{article.title}</Text>
          <Text style={styles.subTitle}>Summary</Text>
            <View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.summary}>{article.summary}</Text>
              </View>
            </View>
            <View style={styles.launchTime}>
              <Icon name="rocket" size={30} color="black" style={{ padding: 1 }}  />
              <Text>{new Date(article.publishedAt).toLocaleString()}</Text>
            </View>
            <View style={styles.launchTime}>
              <Icon name="rocket" size={30} color="black" style={{ padding: 1 }}  />
              <Text>{article.newsSite}</Text>
            </View>
        </View>
      </Animated.ScrollView>
    </View>
  )
}

export default NewsDetailArticle

const styles = StyleSheet.create({
  button: {
    width: '80%',
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
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    marginHorizontal: 15
  },
  subTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    marginHorizontal: 10
  },
  summary: {
    justifyContent: 'center',
    marginHorizontal: 10
  }
})