import { POKEMON_TYPE_COLORS } from "./constants";

const getColorByPokemonType = (type) => {
  if (type.length === 1) {
    return POKEMON_TYPE_COLORS[type[0].toLowerCase()];
  }
  const colors = type.map((t) => POKEMON_TYPE_COLORS[t.toLowerCase()]);
  return colors;
};

export default getColorByPokemonType;
