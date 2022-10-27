import { StyleSheet, TextInput, TextInputProps, View, Keyboard, Button, TouchableHighlightProps } from 'react-native';
import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
        <Icon name="rocket" size={30} color="black" style={{ padding: 1 }}  />
        <TextInput
          style={themeStyles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={onChange}
          onFocus={() => {setClicked(true);}} />
        {clicked && (
          <Icon name="cross" size={30} color="black" style={{ padding: 1 }} onPress={() => { setSearchPhrase("") }}/>
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
  const { placeholderColor, primaryColor, backgroundColor } =
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
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      },
  });
};