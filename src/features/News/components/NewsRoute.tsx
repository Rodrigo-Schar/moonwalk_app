import { StyleSheet } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NewsRootStackParamList } from './NewsRootStack'
import { News } from '@/features';
const Stack = createNativeStackNavigator<NewsRootStackParamList>();

const NewsRoute = () => {
	const options = {
    headerShown: false,
	};

  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsScreen" component={News.NewsScreen} options={options} />
      <Stack.Screen name="NewsDetailArticle" component={News.NewsDetailArticle} options={options} />
		</Stack.Navigator>
  )
}

export default NewsRoute

const styles = StyleSheet.create({
  button: {
      width: '80%',
  },
})