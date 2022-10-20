import { StyleSheet, TouchableHighlightProps, Text } from 'react-native';
import {useContext} from 'react';
import {ColorContext} from '@/shared';
  
  export type LabelErrorProps = {
    text: string;
    isActive: boolean;
  };
  
  const LabelError = ({
    text,
    isActive,
    style,
  }: LabelErrorProps & TouchableHighlightProps) => {
    const styles = useStyles(text);
  
    return (
        <Text style={styles.text}>{text}</Text>
    );
  };
  
  export default LabelError;
  
  const useStyles = (message: string) => {
    const {
      backgroundColor,
      primaryColor,
      primaryColorText,
      secondaryButtonText,
      largePadding,
      border,
      margin,
    } = useContext(ColorContext);
  
    return StyleSheet.create({
      text: {
        color: 'red',
        height: message == '' ? 0 : 50,
        fontSize: 18,
        margin: 5,
      },
    });
  };