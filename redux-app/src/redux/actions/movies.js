import { createAction } from "@reduxjs/toolkit";

// Se importan las actions de slices para ejemplificar (usar o una o la otra)
import {
    startFetchMovieDetails as startFetchMovieDetailsSlice,
    successFetchMovieDetails as successFetchMovieDetailsSlice,
    errorFetchMovieDetails as errorFetchMovieDetailsSlice,
} from "../slices/movies";

const BASE_URL = "https://moviesdb5.p.rapidapi.com";
const headers = {
    'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com',
    'X-RapidAPI-Key': '32d4e08244msh91f3d985e95dc80p1fc79ejsncd25ec00577d'
};

export const startFetchMovieDetails = createAction('START_FETCH_MOVIE_DETAILS');
export const successFetchMovieDetails = createAction('SUCCESS_FETCH_MOVIE_DETAILS');
export const errorFetchMovieDetails = createAction('ERROR_FETCH_MOVIE_DETAILS');

export const fetchMovieDetails = (movieId) => async (dispatch) => {
    try {
        //dispatch(startFetchMovieDetails());
        dispatch(startFetchMovieDetailsSlice());

        const response = await fetch(`${BASE_URL}/om?i=${movieId}`, { headers });
        const data = await response.json();

        //dispatch(successFetchMovieDetails({ data }));
        dispatch(successFetchMovieDetailsSlice({ data }));
    } catch (error) {
        //dispatch(errorFetchMovieDetails({ error }));
        dispatch(errorFetchMovieDetailsSlice({ error }));

    }
};
