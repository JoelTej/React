import { startFetchMovieDetails, successFetchMovieDetails, errorFetchMovieDetails } from "../actions/movies";

const initialState = {
    isFetching: false,
    isLoading: true,
    error: null,
    success: null,
    movieDetails: null,
};

const MoviesReducer = (state = {}, action) => {
    switch (action.type) {
        case startFetchMovieDetails.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: true,
            };
        case successFetchMovieDetails.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                movieDetails: action.payload.data,
                success: true,
                error: null,
            };
        case errorFetchMovieDetails.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                movieDetails: null,
                success: false,
                error: action.payload.error,
            }
        default:
            return state;
    }
};
 
export default MoviesReducer;