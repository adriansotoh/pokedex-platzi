//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

// create a component
const NoLogged = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Para ver esta pantalla, tienes que iniciar sesión
      </Text>
      <Button
        text={"Ir al login"}
        onPress={() => {
          navigation.navigate("AccountTab", { screen: "Account" });
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});

//make this component available to the app
export default NoLogged;
