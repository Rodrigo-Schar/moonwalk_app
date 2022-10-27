import { ImageBackground, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { Launch } from '@/models/Launch';

import {ColorContext} from '@/shared';

export type PreviewLaunchProps = {
  launch: Launch;
};

const PreviewLaunch = ({
  launch,
  ...rest
}: PreviewLaunchProps) => {
  const themeStyles = useStyles();
  const date = new Date(launch.net)

  return (
    <View style={themeStyles.container}>
      <ImageBackground style={themeStyles.imageContainer} source={{ uri: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20220929203708.png" }} imageStyle={{ opacity: 0.9 }}>
        <Text style={themeStyles.title}>{launch?.name}</Text>
        <Text style={themeStyles.time}>{date.toLocaleString()}</Text>
      </ImageBackground>
    </View>
  );
};

export default PreviewLaunch;

const useStyles = () => {
  const { placeholderColor, primaryColor } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
      backgroundColor: "#000000",
      borderRadius: 30,
      flex: 1,
      overflow: 'hidden',
      margin: 20,
			justifyContent: 'space-between',
    },
    imageContainer: {
        height: '100%',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20,
    },
    time: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20,
				alignSelf: 'flex-end'
    }
  });
};