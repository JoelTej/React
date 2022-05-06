import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    isLoading: true,
    error: null,
    success: null,
    movieDetails: null,
};

const moviesSlice = createSlice({
    name: 'movies-slice',
    initialState,
    reducers: {
        startFetchMovieDetails(state, action) {
            state.isLoading = false;
            state.isFetching = true;
        },
        successFetchMovieDetails(state, action) {
            state.isLoading = false;
            state.isFetching = false;
            state.movieDetails = action.payload.data;
            state.success = true;
            state.error = null;
        },
        errorFetchMovieDetails(state, action) {
            state.isLoading = false;
            state.isFetching = false;
            state.movieDetails = null;
            state.success = false;
            state.error = action.payload.error;
        },
    }
});

const { actions, reducer } = moviesSlice;

const { startFetchMovieDetails, successFetchMovieDetails, errorFetchMovieDetails } = moviesSlice.actions;

export { startFetchMovieDetails, successFetchMovieDetails, errorFetchMovieDetails };

export default reducer;
