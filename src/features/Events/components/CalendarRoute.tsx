import { StyleSheet } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CalendarRootStackParamList } from './CalendarRootStack'
import { Events } from '@/features';
const Stack = createNativeStackNavigator<CalendarRootStackParamList>();

const CalendarRoute = () => {
	const options = {
		headerShown: false,
	};

  return (
    <Stack.Navigator>
      <Stack.Screen name="CalendarScreen" component={Events.CalendarScreen} options={options} />
      <Stack.Screen name="CalendarDetailLaunch" component={Events.CalendarDetailLaunch} options={options} />
    </Stack.Navigator>
  )
}

export default CalendarRoute

const styles = StyleSheet.create({
  button: {
      width: '80%',
  },
})