import { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AppContext } from '@/shared';
import { Header, SecondaryHeader, CardArticle, SearchBar } from '@/components';
import { Article } from '@/models/Article';
import { searchArticleByTitle } from '@/services';

const SearchScreen = () => {
  const appContext = useContext(AppContext);
  const [articles, setArticles] = useState<Article[] | null>(null)
  const [results, setResults] = useState('Write a title for search');
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState(false);
  const [isSearching, setSearching] = useState(false);

  const searchByTitle = () => {
    searchArticleByTitle(title)
        .then(items => {
        setArticles(items)
        setResults(`${items.length} Results`)
        setSearching(true)
    })
  };

  return (
    <View>
      <Header title='Search' />
      <SearchBar phrase={title} isClicked={search} onPress={searchByTitle} onChangeText={setTitle} />
      <SecondaryHeader type={2} title={results} description='Related news articles' />
      {isSearching && (
        <FlatList
        data={articles}
        renderItem={(article) => <CardArticle {...article.item} /> }
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