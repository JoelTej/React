import { Link } from "react-router-dom";
import "./style.css";

export default function PokemonListItem({ name, url }) {

    const getId = () => url.split("/")[6];

    return (
        <div className="list-items">
            <Link to={`/pokemon/${getId()}`}> {`#${getId()} ${name.toUpperCase()} `} </Link>
        </div>
    );
}