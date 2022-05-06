import PokemonListItem from "./PokemonListItem";
import "./style.css";

export default function PokemonList({ pokemon }) {
    return (
        <>
            <h2 style={{textAlign: "center"}}> POKEDEX DE KANTO </h2>
            <div className="items-list">
                {pokemon?.map((pokemon, index) => <PokemonListItem key={index} {...pokemon} />)}
            </div>
        </>
    );
}
