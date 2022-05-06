import PokemonContext from "./index";
import apiCall from "../../api";
import { useState } from "react";

export default function PokemonProvider({ children }) {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [hasError, setHasError] = useState(false);

    const getPokemon = async () => {
        try {
            setHasError(false);
            const pokemonResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=151" });
            setPokemon(pokemonResult.results);
        }
        catch (error) {
            setHasError(true);
            setPokemon([]);
        } 
    }

    const getPokemonDetail = async (id) => {
        if (!id) Promise.reject("ID es requerido");

        try {
            setHasError(false);
            const pokemonDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` });
            setPokemonDetail(pokemonDetail);
        }
        catch (error) {
            setHasError(true);
            setPokemonDetail([]);
        } 
    }

    return (
        <PokemonContext.Provider value={{
            getPokemon, pokemon,
            getPokemonDetail, pokemonDetail,
            hasError
        }}>
            {children}
        </PokemonContext.Provider>
    );
};