import { PokemonCardData, Type } from "../interfaces";
import styles from "../styles/styles.module.css";

export const PokemonDetail = ({ selected }: { selected: PokemonCardData }) => {
  return (<div className={styles.pokemonCardDetail}>
      <img className={styles.detailImage} src={selected?.img}></img>
      <div className={styles.cardBody}>
        <div className="d-flex">
          <p className="text-center">
            # {selected?.id} {selected?.name}
          </p>
        </div>
        <div className="row">
          <div className="col-8">
            <p className={styles.detailTitle}>Tipo:</p>
            <div className="d-flex flex-center">
              {selected?.types?.map(({ type }) => (
                <img
                  className="w-small"
                  src={require(`../assets/${type.name}-icon.png`)}
                ></img>
              ))}
            </div>
          </div>
          <div className="col-4">
            <p className={styles.detailTitle}>Peso:</p>
            <p>{selected?.weight}</p>
          </div>
        </div>
        <div>
          <p className={styles.detailTitle}>Sprites:</p>
          {selected?.sprites?.map((spriteImg) => (
            <img id={spriteImg} src={spriteImg}></img>
          ))}
        </div>
        <div>
          <p className={styles.detailTitle}>Movimientos:</p>
          {selected?.moves?.join(", ")}
        </div>
      </div>
    </div>)
};
