import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
    'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com',
    'X-RapidAPI-Key': '32d4e08244msh91f3d985e95dc80p1fc79ejsncd25ec00577d'
};

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://moviesdb5.p.rapidapi.com' }),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url: `/om?s=${title}`,
                method: 'GET',
                headers 
            })
        })
    })
});

export const { useFetchMoviesQuery } = moviesApi;
