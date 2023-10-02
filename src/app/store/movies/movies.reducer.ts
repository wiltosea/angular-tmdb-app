import { createReducer, on } from "@ngrx/store";
import { addToFavorite, removeFavorite } from "./movies.actions";
import { initialState } from "./movies.store";

export const movieReducer = createReducer(
    initialState,
    on(addToFavorite, (state, { movie }) => ({
        ...state,
        favorites: [...state.favorites, movie],
    })),
    on(removeFavorite, (state, { movie }) => ({
        ...state,
        favorites: state.favorites.filter(f => f.id !== movie.id),
    })),
);
