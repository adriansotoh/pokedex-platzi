//import liraries
import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokeDex from "../screens/PokeDex";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

// create a component
const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokeDex}
        options={{
          title: "PokeDex",
          // title: "",
          // headerTransparent: true,
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "Pokemón",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

//make this component available to the app
export default PokedexNavigation;
