//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

// create a component
const FavoritesNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favoritos",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

//make this component available to the app
export default FavoritesNavigation;
