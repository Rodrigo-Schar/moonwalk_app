import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { ColorContext } from '@/shared';

type LoadingType = 'large' | 'small';

type LoadingProps = {
  type?: LoadingType;
}

const Loading = ({
  type = 'large',
  style,
  ...rest
}: LoadingProps & ActivityIndicatorProps) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer} />
      <ActivityIndicator size={type} color={styles.loading.color} style={[styles.loading, style]} {...rest} />
    </View>
  )
}

export default Loading

const useStyles = () => {
  const {
    loadingColor,
    loadingBackground,
    primaryColor
  } = useContext(ColorContext);

  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: 'center',
      position: 'absolute',
    },
    loadingContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: loadingBackground,
      opacity: 0.5,
      position: 'absolute',
    },
    loading: {
      width: 100,
      height: 100,
      backgroundColor: loadingColor,
      borderRadius: 15,
      color: primaryColor
    },
  })
}