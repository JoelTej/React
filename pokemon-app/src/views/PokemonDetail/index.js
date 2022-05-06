import { useParams, Link } from "react-router-dom";
import { useEffect } from "react"; 
import shallow from "zustand/shallow";

//import PokemonContext from "../../context/pokemon";
import PokeSprites from "./components/PokeSprites";
import PokeTypes from "./components/PokeTypes";
import PokeStats from "./components/PokeStats";
import Error404 from "../../views/Error404";
import usePokemonStore from "../../zustand/stores/pokemon";
import "./style.css";

export default function PokemonDetail() {
    const { id } = useParams();
   // const { getPokemonDetail, pokemonDetail, hasError } = useContext(PokemonContext);
    const { getPokemonDetail, pokemonDetail, hasError
    } = usePokemonStore(state => ({
        getPokemonDetail: state.getPokemonDetail,
        pokemonDetail: state.pokemonDetail,
        hasError: state.hasError
    }), shallow);
    
    useEffect(() => {
        getPokemonDetail(id).catch(null);
    }, []);

    return (
        <div>
            {hasError ? <Error404 /> : (
                <>
                    <div className="detail-grid">
                        <div className="detail-grid-items">
                            <h1 style={{ marginLeft: "5px" }}>{`${pokemonDetail?.name}`}</h1>
                            <div>
                                <h3 style={{ marginLeft: "5px" }}> Sprites </h3>
                                <PokeSprites sprites={pokemonDetail?.sprites ?? []} />
                            </div>
                        </div>
                        <div className="detail-grid-items">
                            <p style={{ marginLeft: "5px" }}>
                                <h3> WEIGHT </h3>
                                {`${pokemonDetail?.weight} kg`}
                            </p>
                            <p style={{ marginLeft: "5px" }}>
                                <h3> HEIGHT </h3>
                                {`${pokemonDetail?.height} cm`}
                            </p>
                            <h3> TYPES </h3>
                            <PokeTypes types={pokemonDetail?.types ?? []} />
                        </div>
                        <div className="detail-grid-items">
                            <h2 style={{ marginLeft: "5px" }}> STATS </h2>
                            <PokeStats stats={pokemonDetail?.stats ?? []} />
                        </div>
                    </div>
                    <button className="return-button">
                        <Link to={`/`}> Volver a la lista </Link>
                    </button>                   
                </>
             )}
        </div >
    );
}
