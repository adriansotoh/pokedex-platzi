//import liraries
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

// create a component
const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      const newArrPokemons = await Promise.all(
        response.results.map(async (poke) => {
          const pokeDetails = await getPokemonDetailsByUrlApi(poke.url);
          return {
            id: pokeDetails.id,
            name: pokeDetails.name,
            type: pokeDetails.types[0].type.name,
            order: pokeDetails.order,
            image: pokeDetails.sprites.other["official-artwork"].front_default,
          };
        })
      );
      setPokemons([...pokemons, ...newArrPokemons]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default PokeDex;
