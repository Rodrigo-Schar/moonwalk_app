import { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native'

import { ColorContext } from '@/shared';

type SpinnerProps = {
  size: number | 'small' | 'large' | undefined;
}

const Spinner = ({ size = 'small' } : SpinnerProps) => {
  const { primaryColor } = useContext(ColorContext);

  return (
    <ActivityIndicator size={size} color={primaryColor}/>
  )
}

export default Spinner

const styles = StyleSheet.create({})