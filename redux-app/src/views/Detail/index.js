import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { fetchMovieDetails } from "../../redux/actions/movies";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import Loading from "../../components/Loading";


const Detail = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { success, error, isLoading, isFetching, movieDetails } = useSelector((state) => state.moviesReducerSlice);

    useEffect(() => {
        dispatch(fetchMovieDetails(movieId));
    }, [dispatch,movieId]);

    const renderContent = () => {
        if (isLoading || isFetching) {
            return <Loading message="Obteniendo informacion de la pelicula..." />
        } else if (error) {
            return <p> Ha ocurrido un error al obtener informacion de la pelicula </p>
        }

        return (
        <>
            <LeftContainer image={movieDetails?.Poster} />
            <RightContainer
                title={movieDetails?.Title ?? 'No disponible'}
                year={movieDetails?.Year ?? 'No disponible'}
                rating={movieDetails?.imdbRating ?? 'No disponible'}
                plot={movieDetails?.Plot ?? 'No disponible'}
                cast={movieDetails?.Actors ?? 'No disponible'}
                genre={movieDetails?.Genre ?? 'No disponible'}
            />
        </>
        );
    };

    return (
        <div className="flex flex-row px-16 h-screen items-center justify-center">
            {renderContent()}
        </div>
    );
};

export default Detail;