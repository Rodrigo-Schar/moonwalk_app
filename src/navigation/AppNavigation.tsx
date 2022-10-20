import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppContext } from '@/shared'
import { SignIn, Home } from '@/features';
import { RootStackParamList } from './RootStack'

const Stack = createNativeStackNavigator<RootStackParamList>();

const SignedScreens = () => (
    <>
      <Stack.Screen name="Home" component={Home.HomeScreen} />
    </>
)

const NotSignedScreens = () => {
    const options = {
      headerShown: false,
    };
  
    return (
      <>
        <Stack.Screen name="SignIn" component={SignIn.SignIn} options={options} />
        <Stack.Screen name="Splash" component={SignIn.Splash} options={options} />
        <Stack.Screen name="SignUp" component={SignIn.SignUp} options={options} />
      </>
    )
  }

  const AppNavigation = () => {
    const { isSignedIn, isLoading } = useContext(AppContext);
  
    if (isLoading) {
      return <SignIn.Loading />;
    }
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? SignedScreens() : NotSignedScreens()}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigation;