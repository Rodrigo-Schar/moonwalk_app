import { useContext, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import { AppContext } from '@/shared';
import { Header, SecondaryHeader, CardArticle, SearchBar } from '@/components';
import { Article } from '@/models/Article';
import { searchArticleByTitle, searchLaunchByTitle } from '@/services';
import { Launch } from '@/models/Launch';
import CardLaunch from './CardLaunch';

const SearchScreen = ({ navigation }) => {
  const appContext = useContext(AppContext);
  const [articles, setArticles] = useState<Article[] | null>(null)
  const [launches, setLaunchs] = useState<Launch[] | null>(null)
  const [results, setResults] = useState('Write a title for search');
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState(false);
  const [isSearching, setSearching] = useState(false);

  const searchByTitle = () => {
    searchLaunchByTitle(title)
      .then(items => {
        setLaunchs(items)
        setResults(`${items.length} Results`)
      })

    searchArticleByTitle(title)
        .then(items => {
        setArticles(items)
        setSearching(true)
    })
  };

  const gotoDetail = async (article: Article) => {
    navigation.navigate('SearchDetailArticle',
      article
    );
  };

  return (
    <View>
      <Header title='Search' />
      <SearchBar phrase={title} isClicked={search} onPress={searchByTitle} onChangeText={setTitle} />
      <SecondaryHeader type={2} title={results} />
      {isSearching && (
        <FlatList
        data={launches}
        renderItem={(launch) => <CardLaunch {...launch.item} /> }
        keyExtractor={(item) => item.id} />
      )}
      <SecondaryHeader type={2} title="Related Articles" />
      {isSearching && (
        <FlatList
        data={articles}
        renderItem={(article) => (
          <TouchableHighlight
          key={article.index}
          onPress={() => gotoDetail(article.item)}>
            <CardArticle {...article.item} />
          </TouchableHighlight>
        ) }
        keyExtractor={(item) => item.title} /> 
      )}
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  button: {
      width: '80%',
  },
})