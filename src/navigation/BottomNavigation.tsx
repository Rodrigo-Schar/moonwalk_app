import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { SignIn, Home, News, Search } from '@/features';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const options = {
    headerShown: false,
  };
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home.HomeScreen} options={options} />
        <Tab.Screen name="News" component={News.NewsScreen} options={options} />
        <Tab.Screen name="Search" component={Search.SearchScreen} options={options} />
      </Tab.Navigator>
  );
}

export default BottomNavigation