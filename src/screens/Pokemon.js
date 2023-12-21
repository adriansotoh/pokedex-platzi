//import liraries
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { getPokemonDetailsByIdApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Favorite from "../components/Pokemon/Favorite";
import useAuth from "../hooks/useAuth";

// create a component
const Pokemon = (props) => {
  const {
    route: { params },
    navigation,
  } = props;
  const { auth } = useAuth();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name={"arrow-left"}
          color={"#fff"}
          size={20}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params, pokemon, auth]);

  useState(() => {
    (async () => {
      try {
        const data = await getPokemonDetailsByIdApi(params.id);
        setPokemon(data);
      } catch (error) {
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
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
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
