import { MovieOverview } from "src/app/movies/models/MovieOverview";

export interface MovieStore {
    favorites: MovieOverview[];
}

export const initialState: MovieStore = {
    favorites: []
}
