import { StyleSheet, TouchableHighlight, TouchableHighlightProps, Text } from 'react-native';
import {useContext} from 'react';
import {ColorContext} from '@/shared';
  
  type LabelButtonType = 'primary' | 'secundary';
  
  export type LabelButtonProps = {
    text: string;
    type?: LabelButtonType;
  };
  
  const LabelButton = ({
    text,
    type = 'primary',
    onPress,
    style,
  }: LabelButtonProps & TouchableHighlightProps) => {
    const styles = useStyles(type);
  
    return (
      <TouchableHighlight onPress={onPress} underlayColor="none">
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    );
  };
  
  export default LabelButton;
  
  const useStyles = (type: LabelButtonType) => {
    const {
      primaryColorText,
      secondaryButtonText,
    } = useContext(ColorContext);
  
    return StyleSheet.create({
      text: {
        color: type == 'primary' ? primaryColorText : secondaryButtonText,
        height: 30,
        fontSize: 18,
        marginBottom: 30,
      },
    });
  };