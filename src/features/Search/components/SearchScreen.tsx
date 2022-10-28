import { useContext, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight, Keyboard } from 'react-native'
import { AppContext } from '@/shared';
import { Header, SecondaryHeader, CardArticle, SearchBar } from '@/components';
import { Article } from '@/models/Article';
import { searchArticleByTitle, searchLaunchByTitle } from '@/services';
import { Launch } from '@/models/Launch';
import CardLaunch from './CardLaunch';
import {ColorContext} from '@/shared';

const SearchScreen = ({ navigation }) => {
  const { setIsBusy } = useContext(AppContext);
  const themeStyles = useStyles();
  const [articles, setArticles] = useState<Article[]>([])
  const [launches, setLaunchs] = useState<Launch[]>([])
  const [done, setDone] = useState<boolean>(false)
  const [results, setResults] = useState('Write a title for search');
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState(false);
  const [isSearching, setSearching] = useState(false);

  const searchByTitle = () => {
    setIsBusy(true);
    Keyboard.dismiss();
    searchLaunchByTitle(title)
      .then(items => {
        setLaunchs(items.results)
        if(items.results != undefined) {
          setResults(`${items.results.length} Results`)
        }
        setResults('0 launches found')
      })

    searchArticleByTitle(title)
        .then(items => {
        setArticles(items)
        setSearching(true)
        setDone(true);
        setIsBusy(false);
    })
  };

  const gotoLaunchDetail = async (launch: Launch) => {
    navigation.navigate('SearchDetailLaunch',
      launch
    );
  };

  const gotoArticleDetail = async (article: Article) => {
    navigation.navigate('SearchDetailArticle',
      article
    );
  };

  return (
    <View style={themeStyles.container}>
      <Header title='Search' />
      <SearchBar phrase={title} isClicked={search} onPress={searchByTitle} onChangeText={setTitle} />
      <SecondaryHeader type={2} title={results} />
      {isSearching && done && (
        <FlatList
        data={launches}
        renderItem={(launch) => (
          <TouchableHighlight
            key={launch.index}
            onPress={() => gotoLaunchDetail(launch.item)}>
              <CardLaunch {...launch.item} />
            </TouchableHighlight>
        ) }
        keyExtractor={(item) => item.id} />
      )}
      <SecondaryHeader type={2} title="Related Articles" />
      {isSearching && done && (
        <FlatList
        data={articles}
        renderItem={(article) => (
          <TouchableHighlight
          key={article.index}
          onPress={() => gotoArticleDetail(article.item)}>
            <CardArticle {...article.item} />
          </TouchableHighlight>
        ) }
        keyExtractor={(item) => item.title} /> 
      )}
    </View>
  )
}

export default SearchScreen

const useStyles = () => {
  const { backgroundColor } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
    },
  })
}

