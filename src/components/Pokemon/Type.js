//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import getColorByPokemonType from "../../utils/getColorByPokemonType";

// create a component
const Type = (props) => {
  const { types } = props;

  return (
    <View style={styles.container}>
      {types.map((type, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType([type.type.name]),
          }}
        >
          <Text style={styles.name}>{type.type.name}</Text>
        </View>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  name: {
    textTransform: "capitalize",
  },
});

//make this component available to the app
export default Type;
