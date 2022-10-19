import { createContext } from 'react';

const defaultValue = {
  isSignedIn: false,
  isLoading: false,
  setIsSignedIn: (_: boolean) => {},
  setIsLoading: (_: boolean) => {},
}

export const AppContext = createContext(defaultValue);

export default AppContext.Provider;