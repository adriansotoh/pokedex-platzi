//import liraries
import React from "react";
import { Text, StyleSheet, Platform, Pressable } from "react-native";

// create a component
const Button = (props) => {
  const { text = "", onPress = () => {}, style = {}, styleText = {} } = props;
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, styleText]}>{text}</Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === "android" ? "#2196F3" : "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#fff",
  },
});

//make this component available to the app
export default Button;
