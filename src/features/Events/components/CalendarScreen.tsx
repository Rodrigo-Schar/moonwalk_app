import { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AppContext } from '@/shared';
import { Header, SecondaryHeader } from '@/components';
import { Launch } from '@/models/Launch';
import { getEvents } from '@/services';
import CardCalendar from './CardCalendar';

const CalendarScreen = () => {
  const appContext = useContext(AppContext);
  const [launches, setLaunches] = useState<Launch[] | null>(null)
  var launchesList: Launch[] = []

  useEffect(() => {
    getEvents()
      .then(items => {
        for(let results of items.results) {
            for(let launches of results.launches) {
              launchesList.push(launches)
            }
        }
        setLaunches(launchesList)
      })
  }, [])

  return (
    <View>
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

const styles = StyleSheet.create({
  button: {
      width: '80%',
  },
})