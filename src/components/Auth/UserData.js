//import liraries
import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import useAuth from "../../hooks/useAuth";
import Button from "../Button";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../../api/favorite";

// create a component
const UserData = () => {
  const { auth, logOut } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi();
          setTotal(response.length || 0);
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContainer}>
        <ItemMenu
          title={"Nombre"}
          texto={`${auth.firstName} ${auth.lastName}`}
        />
        <ItemMenu title={"Username"} texto={`${auth.username}`} />
        <ItemMenu title={"Email"} texto={`${auth.email}`} />
        <ItemMenu title={"Total Favoritos"} texto={`${total} pokemons`} />
      </View>
      <Button text="Desconectarse" onPress={logOut} />
    </View>
  );
};

function ItemMenu(props) {
  const { title, texto } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text style>{texto}</Text>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  titleContainer: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContainer: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cfcfcf",
    alignItems: "center",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
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
export default UserData;
