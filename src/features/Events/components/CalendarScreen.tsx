import { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import { AppContext } from '@/shared';
import { Header, SecondaryHeader } from '@/components';
import { Launch } from '@/models/Launch';
import { getEvents } from '@/services';
import CardCalendar from './CardCalendar';
import {ColorContext} from '@/shared';

const CalendarScreen = ({ navigation }) => {
  const { setIsBusy } = useContext(AppContext);
  const themeStyles = useStyles();
  const [launches, setLaunches] = useState<Launch[]>([])
  const [done, setDone] = useState<boolean>(false)
  var launchesList: Launch[] = []

  useEffect(() => {
    setIsBusy(true);
    getEvents()
      .then(items => {
        if(items.results != undefined) {
          for(let results of items.results) {
            for(let launches of results.launches) {
              launchesList.push(launches)
            }
          }
          setLaunches(launchesList)
          setIsBusy(false);
          setDone(true);
        } 
        setIsBusy(false);
      })
  }, [])

  const gotoLaunchDetail = async (launch: Launch) => {
    navigation.navigate('CalendarDetailLaunch',
      launch
    );
  };

  return (
    <View style={themeStyles.container}>
      <Header title='Calendar' />
      <SecondaryHeader type={1} title='Scheduled' />
      {done &&
        <FlatList
        data={launches}
        renderItem={(launch) => (
          <TouchableHighlight
            key={launch.index}
            onPress={() => gotoLaunchDetail(launch.item)}>
              <CardCalendar {...launch.item} />
            </TouchableHighlight>
        ) }
        keyExtractor={(item) => item.id} />
      }
      {!done &&
        <View style={themeStyles.noData}>
            <Text style={themeStyles.noDataText}>Sorry! By now there are not Launch Events Available</Text>
          </View>
      }
    </View>
  )
}

export default CalendarScreen

const useStyles = () => {
  const { backgroundColor, primaryColorText } =
    useContext(ColorContext);

    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: backgroundColor,
      },
      noData: {
        backgroundColor: backgroundColor,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      },
      noDataText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: primaryColorText,
      },
  })
}

