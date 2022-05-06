import { useState } from 'react';
import { useNavigate } from 'react-router';

import Chairs from "../../assets/chairs.png";

const Home = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleInputChange = ({ target: { value } }) => {
        setSearch(value);
    };

    const handleCleanClick = () => setSearch("");

    const handleSearchClick = () => {
        navigate(`/results/${search.trim()}`);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-2/5">
                <img src={Chairs} alt="Movie chairs" className="w-full h-screen object-cover"/>
            </div>
            <div className="w-3/5 flex justify-center items-center flex-col px-60">
                <h2 className="text-5xl font-bold font-lato text-left w-full"> Busca tu pelicula...</h2>
                <input
                    className="bg-special-gray font-lato w-full my-3 h-10 p-1 focus:outline-none focus:ring-1 focus:ring-red-400 rounded"
                    value={search}
                    onChange={handleInputChange}
                />
                <div className="flex w-full justify-between">
                    <button
                        className="font-lato bg-red-500 text-white hover:bg-red-600 w-full shadow-lg h-10"
                        style={{ width: "48%" }}
                        onClick={handleSearchClick}
                    >
                    Buscar
                    </button>
                    <button
                        className="font-lato bg-red-500 text-white hover:bg-red-600 w-full shadow-lg h-10"
                        style={{ width: "48%" }}
                        onClick={handleCleanClick}
                    >
                    Limpiar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;