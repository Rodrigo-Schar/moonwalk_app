import { StyleSheet, TextInput, TextInputProps, View, Button, TouchableHighlightProps } from 'react-native';
import React, { useContext, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ColorContext} from '@/shared';

export type SearchBarProps = {
  phrase: string;
  isClicked: boolean;
} & TextInputProps;

const SearchBar = ({
  style: customStyles,
  phrase,
  isClicked,
  onPress,
  onChangeText,
  ...rest
}: SearchBarProps & TouchableHighlightProps) => {
  const themeStyles = useStyles();
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

  const onChange = (text: string) => {
    setSearchPhrase(text);

    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={themeStyles.container}>
      <View style={clicked? themeStyles.searchBar__clicked: themeStyles.searchBar__unclicked}>
        <AntDesign name='search1' style={{ color: 'black', fontSize: 20}}/>
        
        <TextInput
          style={themeStyles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={onChange}
          onFocus={() => {setClicked(true);}} />
        {clicked && (
          <AntDesign name='close' style={{ color: 'black', fontSize: 20}} onPress={() => { setSearchPhrase("") }}/>
        )}
      </View>
      {clicked && (
        <View>
          <Button
            title="Search"
            onPress={onPress}
          ></Button>
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const useStyles = () => {
  const {  } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
      },
      searchBar__unclicked: {
        paddingHorizontal: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
      },
      searchBar__clicked: {
        paddingHorizontal: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      input: {
        color: '#000000',
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      },
  });
};

//<Icon name="rocket" size={30} color="black" style={{ padding: 1 }}  />
//<Icon name="cross" size={30} color="black" style={{ padding: 1 }} onPress={() => { setSearchPhrase("") }}/>