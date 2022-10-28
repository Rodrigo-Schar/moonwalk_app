import { useContext, useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Text } from 'react-native'
import { Launch } from '@/models/Launch';
import { useRoute } from '@react-navigation/native';
import {ColorContext} from '@/shared';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SearchDetailLaunch = () => {
  const themeStyles = useStyles();
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
    <View style={themeStyles.container}>
      <Image
        style={themeStyles.image}
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
      <View style={themeStyles.content}>
          <Text style={themeStyles.title} >{launch?.name}</Text>
          <View style={themeStyles.launchStatusV}>
            <Text style={themeStyles.launchStatus} >{launch?.status.name}</Text>
          </View>
          
          <Text style={themeStyles.subTitle}>Mission</Text>
            <View>
              <View style={{ marginTop: 10 }}>
                <Text style={themeStyles.summary}>{launch?.mission.description}</Text>
              </View>
            </View>
            <View style={themeStyles.launchTime}>
              <AntDesign name='rocket1' style={{ color: 'black', fontSize: 25, padding: 1}}/>
              <Text style={themeStyles.launchText}>{launch?.launch_service_provider.name}</Text>
            </View>
            <View style={themeStyles.launchTime}>
              <AntDesign name='clockcircleo' style={{ color: 'black', fontSize: 25, padding: 1}}/>
              {dateLaunch != "" && (
                <Text style={themeStyles.launchText}>{new Date(dateLaunch).toLocaleString()}</Text>
              )}
              
            </View>
            <View style={themeStyles.launchTime}>
              <EvilIcons name='location' style={{ color: 'black', fontSize: 30, padding: 1}}/>
              <Text style={themeStyles.launchText}>{launch?.pad.location.name}</Text>
            </View>
        </View>
      </Animated.ScrollView>
    </View>
  )
}

export default SearchDetailLaunch

const useStyles = () => {
  const { backgroundColor, primaryColorText, secondaryColor } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      overflow: "hidden",
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
    launchStatusV: {
      marginVertical: 10,
      width: '100%',
      backgroundColor: secondaryColor,
    },
    launchStatus: {
      color: primaryColorText,
      fontWeight: 'bold',
      fontSize: 26,
      textAlign: 'center',
      margin: 15
    },
    subTitle: {
      color: primaryColorText,
      marginTop: 20,
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

