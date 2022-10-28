import { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import auth from '@react-native-firebase/auth';
import { ThemeType, lightTheme, darkTheme } from '../styles';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

export const useMyTheme = () => {
  const schema = useColorScheme();
  const theme: ThemeType = schema == 'light' ? lightTheme : darkTheme;

  return theme;
}

export const useApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBusy, setIsBusy] = useState(false);

  return { isLoading, setIsLoading, isBusy, setIsBusy }; //isSignedIn, setIsSignedIn, 
}


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch //Launch actions
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector //read properties