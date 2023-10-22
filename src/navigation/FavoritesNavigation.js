//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";

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
    </Stack.Navigator>
  );
};

//make this component available to the app
export default FavoritesNavigation;
