import { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AppContext } from '@/shared';
import { Header, SecondaryHeader } from '@/components';
import { Launch } from '@/models/Launch';
import { getEvents } from '@/services';
import CardCalendar from './CardCalendar';
import {ColorContext} from '@/shared';

const CalendarScreen = () => {
  const { setIsBusy } = useContext(AppContext);
  const themeStyles = useStyles();
  const [launches, setLaunches] = useState<Launch[] | null>(null)
  var launchesList: Launch[] = []

  useEffect(() => {
    setIsBusy(true);
    getEvents()
      .then(items => {
        for(let results of items.results) {
            for(let launches of results.launches) {
              launchesList.push(launches)
            }
        }
        setLaunches(launchesList)
        setIsBusy(false);
      })
  }, [])

  return (
    <View style={themeStyles.container}>
      <Header title='Calendar' />
      <SecondaryHeader type={1} title='Scheduled' />
      <FlatList
      data={launches}
      renderItem={(launch) => <CardCalendar {...launch.item} />}
      keyExtractor={(item) => item.id} />
    </View>
  )
}

export default CalendarScreen

const useStyles = () => {
  const { backgroundColor } =
    useContext(ColorContext);

    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: backgroundColor,
      },
      button: {
          width: '80%',
      },
  })
}

