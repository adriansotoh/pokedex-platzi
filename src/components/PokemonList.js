//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import PokemonCard from "./PokemonCard";

// create a component
const PokemonList = (props) => {
  const { pokemons, loadPokemons, isNext, isLoading } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => <PokemonCard pokemon={item} />}
      keyExtractor={(pokemon) => String(pokemon.id)}
      contentContainerStyle={styles.flatListContentList}
      onEndReached={!isLoading && isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isLoading && isNext ? (
          <ActivityIndicator size={"large"} style={styles.loader} />
        ) : null
      }
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  flatListContentList: {
    padding: 5,
  },
  loader: { marginBottom: 30, marginTop: 30 },
});

//make this component available to the app
export default PokemonList;
