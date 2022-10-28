import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppContext } from '@/shared'
import { SignIn } from '@/features';
import { RootStackParamList } from './RootStack'
import { BottomNavigation } from '@/navigation';
import { useAppSelector, useAppDispatch } from '@/hooks';
import auth from '@react-native-firebase/auth';
import { login } from '@/features/Signin';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const SignedScreens = () => {
  const options = {
    headerShown: false,
  };
  return (
    <>
      <Stack.Screen name="Menu" component={BottomNavigation} options={options}  />
    </>
  )
}

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
    const { isLoading } = useContext(AppContext);
    const dispatch = useAppDispatch();
    const isSignedIn = useAppSelector(state => state.signIn.user);

    const checkUser = async () => {
      const user = auth().currentUser?.email
  
      if (user) {
        dispatch(login(user as any))
      }
    }
  
    useEffect(() => {
      checkUser();
    }, []);
  
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