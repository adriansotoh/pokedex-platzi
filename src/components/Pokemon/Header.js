//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

// create a component
const Header = (props) => {
  const { name, order, type, image } = props;

  const color = getColorByPokemonType(type);

  const bgStyle = [
    { backgroundColor: typeof color === "object" ? color[0] : color },
    styles.bg,
  ];

  return (
    <>
      {type.length === 1 ? (
        <View style={bgStyle} />
      ) : (
        <LinearGradient colors={color} style={styles.bg} />
      )}
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image}></Image>
        </View>
      </SafeAreaView>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
    textTransform: "capitalize",
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: Platform.OS === "android" ? 0 : 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});

//make this component available to the app
export default Header;
