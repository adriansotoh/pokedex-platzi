//import liraries
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";

// create a component
const Favorite = (props) => {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  console.log(isFavorite);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      setReloadCheck((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      setReloadCheck((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Icon
      name={"heart"}
      color={"#fff"}
      solid={isFavorite}
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
};

export default Favorite;
