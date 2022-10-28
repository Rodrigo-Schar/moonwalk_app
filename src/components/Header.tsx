import { StyleSheet, Text, TextInputProps, View } from 'react-native';
import React, { useContext, useState } from 'react';
import {ColorContext} from '@/shared';

export type HeaderProps = {
  title: string;
} & TextInputProps;

const Header = ({
  style: customStyles,
  title,
  ...rest
}: HeaderProps) => {
  const themeStyles = useStyles();
  const [textInputContent, setTextInputContent] = useState('');

  const onChange = (text: string) => {
    setTextInputContent(text);
  };

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const useStyles = () => {
  const { placeholderColor, primaryColorText, backgroundColor } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,	
      width: "100%",
      marginBottom: 10,
    },
    title: {
      color: primaryColorText,
      marginLeft: 10,
      marginTop: 30,
			fontWeight: 'bold',
			fontSize: 26,
			margin: 5
    }
  });
};