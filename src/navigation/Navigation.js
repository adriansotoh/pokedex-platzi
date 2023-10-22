import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";

import FavoritesNavigation from "./FavoritesNavigation";
import AccountNavigation from "./AccountNavigation";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: () => <Icon name="heart" color="#000" size={20}></Icon>,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="PokeDexTab"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="AccountTab"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: () => <Icon name="user" color="#000" size={20}></Icon>,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const renderPokeBall = () => (
  <Image
    source={require("../assets/pokeball.png")}
    style={{ height: 60, width: 60, top: -20 }}
  />
);

export default Navigation;
