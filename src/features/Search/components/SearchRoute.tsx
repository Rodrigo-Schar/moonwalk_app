import { StyleSheet } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SearchRootStackParamList } from './SearchRootStack'
import { Search } from '@/features';
const Stack = createNativeStackNavigator<SearchRootStackParamList>();

const SearchRoute = () => {
	const options = {
		headerShown: false,
	};

  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={Search.SearchScreen} options={options} />
      <Stack.Screen name="SearchDetailArticle" component={Search.SearchDetailArticle} options={options} />
		</Stack.Navigator>
  )
}

export default SearchRoute

const styles = StyleSheet.create({
  button: {
      width: '80%',
  },
})