//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import PokemonCard from "./PokemonCard";

// create a component
const PokemonList = (props) => {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => <PokemonCard pokemon={item} />}
      keyExtractor={(pokemon) => String(pokemon.id)}
      contentContainerStyle={styles.flatListContentList}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  flatListContentList: {
    padding: 5,
  },
});

//make this component available to the app
export default PokemonList;
