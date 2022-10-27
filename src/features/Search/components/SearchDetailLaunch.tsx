import { useContext, useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Text } from 'react-native'
import { AppContext } from '@/shared';
import { Launch } from '@/models/Launch';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useRoute } from '@react-navigation/native';

const SearchDetailLaunch = () => {
  const appContext = useContext(AppContext);
  const [scrollY] = useState(new Animated.Value(0));
  const [launch, setLaunch] = useState<Launch | null>(null)
  const [dateLaunch, setDateLaunch] = useState<string>("")
  const IMAGE_HEIGHT = 400;
  const route = useRoute()

  useEffect(() => {
    const data = route.params;
    const json = JSON.stringify(data);
    const parsed = JSON.parse(json);
    setLaunch(parsed);
    const date = launch?.net as string
    setDateLaunch(date);
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
        source={{ uri: launch?.image }} />
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
          <Text style={styles.title} >{launch?.name}</Text>
          <Text style={styles.title} >{launch?.status.name}</Text>
          <Text style={styles.subTitle}>Mission</Text>
            <View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.summary}>{launch?.mission.description}</Text>
              </View>
            </View>
            <View style={styles.launchTime}>
              <Icon name="rocket" size={30} color="black" style={{ padding: 1 }}  />
              <Text>{launch?.launch_service_provider.name}</Text>
            </View>
            <View style={styles.launchTime}>
              <Icon name="clock" size={30} color="black" style={{ padding: 1 }}  />
              {dateLaunch != "" && (
                <Text>{new Date(dateLaunch).toLocaleString()}</Text>
              )}
              
            </View>
            <View style={styles.launchTime}>
              <Icon name="rocket" size={30} color="black" style={{ padding: 1 }}  />
              <Text>{launch?.pad.location.name}</Text>
            </View>
        </View>
      </Animated.ScrollView>
    </View>
  )
}

export default SearchDetailLaunch

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