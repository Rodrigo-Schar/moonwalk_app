import { StyleSheet, Text, TextInputProps, View } from 'react-native';
import React, { useContext, useState } from 'react';

import {ColorContext} from '@/shared';

export type SecondaryHeaderProps = {
  type: number;
  title: string;
  description: string;
} & TextInputProps;

const SecondaryHeader = ({
  type,
  style: customStyles,
  onChangeText,
  title,
  description,
  ...rest
}: SecondaryHeaderProps) => {
  const themeStyles = useStyles(type);
  const [textInputContent, setTextInputContent] = useState('');

  const onChange = (text: string) => {
    setTextInputContent(text);

    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.title}>{title}</Text>
      <Text style={themeStyles.description}>{description}</Text>
    </View>
  );
};

export default SecondaryHeader;

const useStyles = (type: number) => {
  const { backgroundColor } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,	
      width: "100%",
      marginBottom: 10,
      alignItems: type == 1 ? 'flex-start' : 'center',
    },
    title: {
      marginLeft: 10,
      height: 25,
      fontWeight: 'bold',
      fontSize: 18,
      margin: 5,
    },
    description: {
      marginLeft: 10,
      height: type == 1 ? 0 : 25,
      fontWeight: 'bold',
      fontSize: 18,
      margin: 5,
    },
  });
};