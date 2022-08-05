import { useEffect, useState } from "react";
import { PokemonCardData, PokemonData, PokemonResult } from "../interfaces";
import { getData, getPokemonsByName } from "../services";

export const usePokemonList = () => {
  const [pokemons, setPokemons] = useState([] as PokemonCardData[]);
  const [pokemonData, setPokemonData] = useState({} as PokemonData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchPokemons();
  }, []);

  const getPokemonInterface = ({ id, name, types, sprites, weight, moves }: any) => ({
    img: sprites["front_default"],
    name,
    id,
    types,
    sprites: Object.values(sprites).filter((e) => e && typeof e === 'string'),
    moves: moves.map(({move} :any) => move.name).slice(0, 20),
    weight,
  } as PokemonCardData);

  const searchPokemons = async (url?: string | null | undefined) => {
    setLoading(true);
    try {
      const data = await getData(url);
      setPokemonData(data);
      const { results } = data;
      const pokemonList = await Promise.all(
        results.map(({ url }: PokemonResult) => getData(url))
      );
      const cardListData = pokemonList.map(getPokemonInterface);
      setPokemons(cardListData);
    } catch {
      setPokemons([]);
    } finally {
      setLoading(false);
    }
  };

  const searchPokemonByName = async (namePokemon: string) => {
    if (namePokemon !== "") {
      setLoading(true);
      try {
        const resp = await getPokemonsByName(namePokemon);
        const pokemonByName = getPokemonInterface(resp);
        setPokemons([pokemonByName]);
      } catch {
        setPokemons([]);
      } finally {
        setLoading(false);
      }
    } else {
      searchPokemons();
    }
  };
  return {
    loading,
    pokemons,
    pokemonData,
    searchPokemons,
    searchPokemonByName,
  };
};
