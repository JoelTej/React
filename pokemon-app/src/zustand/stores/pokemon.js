import create from "zustand";
import apiCall from "../../api";

const usePokemonStore = create((set, get) => ({
    getPokemon: async () => {
        try {
            set({ hasError: false });
            const pokemonResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=151" });
            set({ pokemon: pokemonResult.results });
        } catch (error){
            set({ hasError: true, pokemon: [] });
        }
    },
    pokemon: [],
    getPokemonDetail: async (id) => {
        if (!id) Promise.reject("ID es requerido");
        try {
            set({ hasError: false });
            const pokemonDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` });
            set({ pokemonDetail });
        } catch (error) {
            set({ hasError: true, pokemonDetail: {} });
        }
    },
    pokemonDetail: {},
    hasError: false,
}));

export default usePokemonStore;

