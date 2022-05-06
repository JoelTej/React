import {  useEffect } from "react";
//import PokemonContext from "../../context/pokemon";
import PokemonList from "./components/PokemonList";
import Error404 from "../../views/Error404"
import usePokemonStore from "../../zustand/stores/pokemon";

export default function Home() {
   // const { getPokemon, pokemon, hasError } = useContext(PokemonContext);
    const { getPokemon, pokemon, hasError } = usePokemonStore(state => ({ getPokemon: state.getPokemon, pokemon: state.pokemon, hasError: state.hasError }));

    useEffect(() => {
        getPokemon().catch(null);
    }, []);

    return (
        <div>
            {hasError ? <Error404 /> : <PokemonList pokemon={pokemon} />}
        </div>
    );
}