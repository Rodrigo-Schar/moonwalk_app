import { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight, Text } from 'react-native';
import { AppContext } from '@/shared';
import { Header, SecondaryHeader, CardArticle } from '@/components';
import { Article } from '@/models/Article';
import { getArticleList } from '@/services';
import {ColorContext} from '@/shared';

const NewsScreen = ({ navigation }) => {
  const { setIsBusy } = useContext(AppContext);
  const themeStyles = useStyles();
  const [articles, setArticles] = useState<Article[]>([])
  const [done, setDone] = useState<boolean>(false)

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
        setDone(true);
      })
  }, [])

  return (
    <View style={themeStyles.container}>
      <Header title='News' />
      <SecondaryHeader type={1} title='Today' />
      {done && articles != undefined &&
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
      }
      {!done &&
        <View style={themeStyles.noData}>
            <Text style={themeStyles.noDataText}>Sorry! By now there are not News Available</Text>
          </View>
      }
    </View>
  )
}

export default NewsScreen

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

