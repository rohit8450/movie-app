import { ADD_MOVIES } from "../actions";
export default function movies (state = [], action) {
    if (action.type == 'ADD_MOVIES') {
        return action.movies;
    }
    return state;
}

// action type
export const ADD_MOVIES = 'ADD_MOVIES';

// action creaters
export function addMovies (movies)  {
    return{
        type: ADD_MOVIES,
        movies
    }
}

