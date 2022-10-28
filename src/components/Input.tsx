import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import React, { useContext, useState } from 'react';

import {ColorContext} from '@/shared';

export type InputProps = {
  isInvalid?: boolean;
  placeholderText: string;
} & TextInputProps;

const Input = ({
  isInvalid,
  style: customStyles,
  onChangeText,
  placeholderText,
  ...rest
}: InputProps) => {
  const themeStyles = useStyles();
  const [textInputContent, setTextInputContent] = useState('');

  const onChange = (text: string) => {
    setTextInputContent(text);

    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={themeStyles.container}>
      <TextInput
        {...rest}
        style={themeStyles.TextInput}
        onChangeText={onChange}
        placeholder={placeholderText}
        placeholderTextColor={themeStyles.TextInput.color}
      />
    </View>
  );
};

export default Input;

const useStyles = () => {
  const { placeholderColor, inputBackground } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
      backgroundColor: inputBackground,
      borderRadius: 30,
      width: "80%",
      height: 45,
      marginBottom: 20,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: placeholderColor
    },
  });
};