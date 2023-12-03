//import liraries
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

// create a component
const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    console.log("LOADING");
    console.log(loading);
    try {
      setLoading(true);
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      console.log("LOAD MORE POKEMONS");
      console.log(nextUrl);
      const newArrPokemons = await Promise.all(
        response.results.map(async (poke) => {
          const pokeDetails = await getPokemonDetailsByUrlApi(poke.url);
          return {
            id: pokeDetails.id,
            name: pokeDetails.name,
            type: pokeDetails.types.map(({ type }) => type.name), //pokeDetails.types[0].type.name,
            order: pokeDetails.order,
            image: pokeDetails.sprites.other["official-artwork"].front_default,
          };
        })
      );
      setPokemons([...pokemons, ...newArrPokemons]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
        isLoading={loading}
      />
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
