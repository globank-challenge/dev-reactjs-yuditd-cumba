import axios from "axios";
// require('dotenv').config()

export const getData = async (
  url: string | null = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
) => {
  if (url) {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {}
  }
};

export const getPokemonsByName = async (name: string) => {
  try {
    const pokemonName = name?.toLowerCase()
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return data;
  } catch (error) {}
};
