import { useContext } from "react";
import { PokemonSelectedContext } from "../pages/Home";
import styles from "../styles/styles.module.css";

export const PokemonCard = ({ pokemon }: any) => {
  const { setSelected } = useContext(PokemonSelectedContext);
  const selectPokemon = () => {
    setSelected(pokemon);
  };
  return (
    <div className={styles.pokemonCard} onClick={selectPokemon}>
      <div className={styles.pokemonTitle}>
        <p className={styles.pokemonId}>{pokemon.id}</p>
      </div>
      <img className={styles.pokemonImg} src={pokemon.img}></img>
      <p className={styles.pokemonDescription}>{pokemon.name}</p>
    </div>
  );
};
