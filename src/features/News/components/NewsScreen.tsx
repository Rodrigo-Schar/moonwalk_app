import { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AppContext } from '@/shared';
import { Header, SecondaryHeader, CardArticle } from '@/components';
import { Article } from '@/models/Article';
import { getArticleList } from '@/services';

const NewsScreen = () => {
  const appContext = useContext(AppContext);
  const [articles, setArticles] = useState<Article[] | null>(null)

  useEffect(() => {
    getArticleList()
      .then(items => {
        setArticles(items)
      })
  }, [])

  return (
    <View>
      <Header title='News' />
      <SecondaryHeader type={1} title='Today' description='' />
      <FlatList
        data={articles}
        renderItem={(article) => <CardArticle {...article.item} /> }
        keyExtractor={(item) => item.title} /> 
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  button: {
      width: '80%',
  },
})