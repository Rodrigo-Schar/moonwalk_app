import { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { AppContext } from '@/shared';
import { Header, SecondaryHeader, CardArticle } from '@/components';
import { Article } from '@/models/Article';
import { getArticleList } from '@/services';
import {ColorContext} from '@/shared';

const NewsScreen = ({ navigation }) => {
  const { setIsBusy } = useContext(AppContext);
  const themeStyles = useStyles();
  const [articles, setArticles] = useState<Article[] | null>(null)

  const gotoDetail = async (article: Article) => {
    navigation.navigate('NewsDetailArticle',
      article
    );
  };

  useEffect(() => {
    setIsBusy(true);
    getArticleList()
      .then(items => {
        setArticles(items)
        setIsBusy(false);
      })
  }, [])

  return (
    <View style={themeStyles.container}>
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

