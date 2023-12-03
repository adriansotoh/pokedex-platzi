//import liraries
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { getPokemonDetailsByIdApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";

// create a component
const Pokemon = (props) => {
  const {
    route: { params },
    navigation,
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useState(() => {
    (async () => {
      try {
        const data = await getPokemonDetailsByIdApi(params.id);
        setPokemon(data);
      } catch (error) {
        console.log(error);
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types.map(({ type }) => type.name)}
      />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Pokemon;
