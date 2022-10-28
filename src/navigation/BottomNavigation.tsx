import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, News, Search, Events } from '@/features';
import { useContext } from 'react';
import {ColorContext} from '@/shared';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const { menu, primaryColorText, secondaryColorText } =
  useContext(ColorContext);

  return (
      <Tab.Navigator screenOptions={({ }) => ({
        tabBarInactiveTintColor: primaryColorText,
        tabBarActiveTintColor: secondaryColorText,
        tabBarStyle: {
          backgroundColor: menu,
          borderColor: primaryColorText
        }
      })}>
        <Tab.Screen name="Home" component={Home.HomeScreen} options={{ 
          headerShown: false,
          tabBarIcon: ({ }) => (
            <AntDesign name='home' style={{ color: primaryColorText, fontSize: 20, padding: 1}}/>
          ),
        }} />
        <Tab.Screen name="Events" component={Events.CalendarRoute} options={{ 
          headerShown: false,
          tabBarIcon: ({ }) => (
            <AntDesign name='calendar' style={{ color: primaryColorText, fontSize: 20, padding: 1}}/>
          ),
        }}  />
        <Tab.Screen name="News" component={News.NewsRoute} options={{ 
          headerShown: false,
          tabBarIcon: ({ }) => (
            <AntDesign name='book' style={{ color: primaryColorText, fontSize: 20, padding: 1}}/>
          ),
        }}  />
        <Tab.Screen name="Search" component={Search.SearchRoute} options={{ 
          headerShown: false,
          tabBarIcon: ({ }) => (
            <AntDesign name='search1' style={{ color: primaryColorText, fontSize: 20, padding: 1}}/>
          ),
        }}  />
      </Tab.Navigator>
  );
}

export default BottomNavigation