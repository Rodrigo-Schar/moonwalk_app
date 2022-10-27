import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, News, Search, Events } from '@/features';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const options = {
    headerShown: false,
  };
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home.HomeScreen} options={options} />
        <Tab.Screen name="Events" component={Events.CalendarScreen} options={options} />
        <Tab.Screen name="News" component={News.NewsRoute} options={options} />
        <Tab.Screen name="Search" component={Search.SearchRoute} options={options} />
      </Tab.Navigator>
  );
}

export default BottomNavigation