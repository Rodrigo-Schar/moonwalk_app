import { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import { AppContext } from '@/shared';
import { Header, SecondaryHeader, CardArticle } from '@/components';
import { Article } from '@/models/Article';
import { getArticleList } from '@/services';

const NewsScreen = ({ navigation }) => {
  const appContext = useContext(AppContext);
  const [articles, setArticles] = useState<Article[] | null>(null)

  const gotoDetail = async (article: Article) => {
    navigation.navigate('NewsDetailArticle',
      article
    );
  };

  useEffect(() => {
    getArticleList()
      .then(items => {
        setArticles(items)
      })
  }, [])

  return (
    <View>
      <Header title='News' />
      <SecondaryHeader type={1} title='Today' />
      <FlatList
        data={articles}
        renderItem={(article) => (
          <TouchableHighlight
          key={article.index}
          onPress={() => gotoDetail(article.item)}>
            <CardArticle {...article.item} />
          </TouchableHighlight>
        )}
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