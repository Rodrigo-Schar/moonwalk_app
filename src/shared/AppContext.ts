import { createContext } from 'react';

type AppContextType = {
  isSignedIn: boolean,
  isLoading: boolean,
  setIsSignedIn: (_: boolean) => void,
  setIsLoading: (_: boolean) => void,
  isBusy: boolean,
  setIsBusy: (_: boolean) => void,
}

const defaultValue: AppContextType = {
  isSignedIn: false,
  isLoading: false,
  setIsSignedIn: (_: boolean) => {},
  setIsLoading: (_: boolean) => {},
  isBusy: false,
  setIsBusy: (_: boolean) => {},
}

export const AppContext = createContext(defaultValue);

export default AppContext.Provider;