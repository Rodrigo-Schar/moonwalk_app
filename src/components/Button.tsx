import { StyleSheet, TouchableHighlight, TouchableHighlightProps, Text } from 'react-native';
import {useContext} from 'react';
import {ColorContext} from '@/shared';
  
  type ButtonType = 'primary' | 'secundary';
  
  export type ButtonProps = {
    text: string;
    type?: ButtonType;
  };
  
  const Button = ({
    text,
    type = 'primary',
    onPress,
    style,
  }: ButtonProps & TouchableHighlightProps) => {
    const styles = useStyles(type);
  
    return (
      <TouchableHighlight style={[styles.button, style]} onPress={onPress} underlayColor="none">
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    );
  };
  
  export default Button;
  
  const useStyles = (type: ButtonType) => {
    const {
      backgroundColor,
      secondaryColor,
      primaryButtonText,
      secondaryButtonText,
      largePadding,
      border,
      margin,
    } = useContext(ColorContext);
  
    return StyleSheet.create({
      button: {
        borderColor: secondaryColor,
        borderWidth: 2,
        backgroundColor: type == 'primary' ? secondaryColor : backgroundColor,
        padding: largePadding,
        borderRadius: border,
        alignItems: 'center',
        margin: margin,
      },
      text: {
        color: type == 'primary' ? primaryButtonText : secondaryButtonText,
        fontWeight: '600',
        fontSize: 18,
      },
    });
  };