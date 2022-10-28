import { StyleSheet, Text, View } from 'react-native';
import  {useContext, useState, useEffect} from 'react';
import {ColorContext} from '@/shared';
  
export type CountDownProps = {
	dateStr: string;
};

const CountDown = ({
    dateStr,
  }: CountDownProps) => {
  const themeStyles = useStyles();
  const [timeLeft, setTimeLeft] = useState(0);
  const wsstamp = new Date(dateStr).getTime() / 1000;
  let timer: number;

  useEffect(() => {
    updateTimeLeft();
    if (wsstamp) {
      timer = setInterval(() => {
        updateTimeLeft();
      }, 1000);
    } else {
      setTimeLeft(0);
    }
    return () => {
      clearInterval(timer);
    };
  }, [wsstamp]);

  const updateTimeLeft = () => {
    const now = new Date();
    const timeLeft = wsstamp * 1000 - now.getTime();
    setTimeLeft(timeLeft);
  };

  const seconds = Math.floor(timeLeft / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const NoData = timeLeft <= 0;

  return (
      <View style={themeStyles.container}>
          <View style={themeStyles.unitContainer}>
              <Text style={themeStyles.number}>{NoData ? "-" : days}</Text>
              <Text style={themeStyles.unit}>{`day${days !== 1 ? "s" : ""}`}</Text>
          </View>
          <View style={themeStyles.unitContainer}>
              <Text style={themeStyles.number}>{NoData ? "-" : hours % 24}</Text>
              <Text style={themeStyles.unit}>{`hour${minutes % 24 !== 1 ? "s" : ""}`}</Text>
          </View>
          <View style={themeStyles.unitContainer}>
              <Text style={themeStyles.number}>{NoData ? "-" : minutes % 60}</Text>
              <Text style={themeStyles.unit}>{`minute${minutes % 60 !== 1 ? "s" : ""}`}</Text>
          </View>
          <View style={themeStyles.unitContainer}>
              <Text style={themeStyles.number}>{NoData ? "-" : seconds % 60}</Text>
              <Text style={themeStyles.unit}>{`second${seconds % 60 !== 1 ? "s" : " "}`}</Text>
          </View>
      </View>
    );
  };
  
export default CountDown;

const useStyles = () => {
  const {
    primaryButtonText, primaryColor
  } = useContext(ColorContext);

  return StyleSheet.create({
    text: {
      color: primaryButtonText,
      height: 30,
      fontSize: 18,
      marginBottom: 30,
    },
    container: {
      backgroundColor: primaryColor,
      marginHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    unitContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    number: {
      fontSize: 26,
      color: primaryButtonText,
      fontWeight: 'bold'
    },
    unit: {
      fontSize: 12,
      color: primaryButtonText,
      fontWeight: 'bold'
    }
  });
};