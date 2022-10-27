import { StyleSheet, Text, TextInputProps, View } from 'react-native';
import React, { useContext, useState } from 'react';
import {ColorContext} from '@/shared';

export type SecondaryHeaderProps = {
  type: number;
  title: string;
} & TextInputProps;

const SecondaryHeader = ({
  type,
  style: customStyles,
  onChangeText,
  title,
  ...rest
}: SecondaryHeaderProps) => {
  const themeStyles = useStyles(type);

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.title}>{title}</Text>
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
  });
};