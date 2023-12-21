//import liraries
import React, { useEffect, useState, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import { getPokemonsFavoriteApi } from "../api/favorite";

import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import { getPokemonDetailsByIdApi } from "../api/pokemon";
import { useFocusEffect } from "@react-navigation/native";
import NoLogged from "../components/NoLogged";

// create a component
const Favorites = () => {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();

          const newArrPokemons = await Promise.all(
            response.map(async (id) => {
              const pokeDetails = await getPokemonDetailsByIdApi(id);
              return {
                id: pokeDetails.id,
                name: pokeDetails.name,
                type: pokeDetails.types.map(({ type }) => type.name), //pokeDetails.types[0].type.name,
                order: pokeDetails.order,
                image:
                  pokeDetails.sprites.other["official-artwork"].front_default,
              };
            })
          );
          setPokemons(newArrPokemons);
        })();
      }
    }, [auth])
  );

  // useEffect(() => {
  // }, [auth]);

  return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
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
export default Favorites;
