import { createContext } from 'react'
import { lightTheme, ThemeType } from '../styles'

const defaultValue: ThemeType = lightTheme;

export const ColorContext = createContext(defaultValue);

export default ColorContext.Provider;