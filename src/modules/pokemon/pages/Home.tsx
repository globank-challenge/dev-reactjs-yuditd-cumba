import { createContext, useState } from "react";
import Loading from "../components/Loading";
import NoFound from "../components/NoFound";
import { PokemonCard } from "../components/PokemonCard";
import { PokemonDetail } from "../components/PokemonDetail";

import { useNoFound } from "../hooks/useNofound";
import { usePokemonList } from "../hooks/usePokemonList";
import { PokemonCardData, SelectedContex } from "../interfaces";
import styles from "../styles/styles.module.css";

export const PokemonSelectedContext = createContext({} as SelectedContex);
const { Provider } = PokemonSelectedContext;

export default function Home() {
  const {
    loading,
    pokemons,
    pokemonData,
    searchPokemons,
    searchPokemonByName,
  } = usePokemonList();
  const [selected, setSelected] = useState(null as PokemonCardData | null);
  const { noFound } = useNoFound(pokemons);
  const [search, setSearch] = useState("");
  const prevPage = () => {
    searchPokemons(pokemonData?.previous);
  };
  const nextPage = () => {
    searchPokemons(pokemonData?.next);
  };
  const searchPage = (e: { target: any }) => {
    searchPokemonByName(e.target.value);
    setSelected(null);
  };
  const reset = () => {
    setSearch("");
    searchPokemons();
    setSelected(null);
  };
  return (
    <Provider value={{ selected, setSelected }}>
      {
        <>
          <div className={styles.header}>
            <div className="p-2" onClick={reset}>
              <i className="icon-home grow"></i>
            </div>
            <input
              className={styles.Search}
              type="text"
              id="searchCard"
              value={search}
              placeholder="Buscar"
              onChange={(e) =>  setSearch(e.target.value)}
              onKeyUp={searchPage}
            ></input>
          </div>

          {noFound ? (
            <NoFound term={search} />
          ) : loading ? (
            <Loading />
          ) : (
            <div className="row">
              <div className="col-8 d-flex flex-wrap">
                {search === '' && (
                  <div className="row p-5 flex-between ">
                    {pokemonData?.previous ? (
                      <button className={styles.buttonCtrl} onClick={prevPage}>
                        <i className="icon-arrow_back_ios icon-next-prev"></i>
                      </button>
                    ) : (
                      <div></div>
                    )}
                    <img
                      className={styles.imgTitle}
                      src={require("../assets/pokemon-go.png")}
                      alt=""
                    ></img>
                    {pokemonData?.next ? (
                      <button className={styles.buttonCtrl} onClick={nextPage}>
                        <i className="icon-arrow_forward_ios icon-next-next"></i>
                      </button>
                    ) : (
                      <div></div>
                    )}
                  </div>
                )}
                <div className="d-flex flex-wrap">
                  {pokemons?.map((pokemon: PokemonCardData) => (
                    <PokemonCard key= {pokemon.id} pokemon={pokemon} />
                  ))}
                </div>
              </div>
              <div className="col-4 d-flex flex-center h-100 nav p-5">
                {selected ? (
                  <PokemonDetail selected={selected} />
                ) : (
                  <div>Click en una tarjeta</div>
                )}
              </div>
            </div>
          )}
        </>
      }
    </Provider>
  );
}
