//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import getColorByPokemonType from "../utils/getColorByPokemonType";

// create a component
const PokemonCard = (props) => {
  const { id, name, image, order, type } = props.pokemon;

  const pokemonColor = getColorByPokemonType(type);
  const bgColor = {
    backgroundColor: pokemonColor,
    ...styles.bgStyles,
  };

  const goToPokemon = () => {
    console.log(`Vamos al pokemon ${name}`);
  };

  return (
    <Pressable onPress={goToPokemon} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          {type.length > 1 ? (
            <LinearGradient colors={pokemonColor} style={styles.bgStyles}>
              <Text style={styles.number}>
                {`#` + `${id}`.padStart(3, "0")}
              </Text>
              <Text style={styles.name}>{name}</Text>
              <Image source={{ uri: image }} style={styles.image} />
            </LinearGradient>
          ) : (
            <View style={bgColor}>
              <Text style={styles.number}>
                {`#` + `${id}`.padStart(3, "0")}
              </Text>
              <Text style={styles.name}>{name}</Text>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
    paddingTop: 10,
    textTransform: "capitalize",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

//make this component available to the app
export default PokemonCard;
