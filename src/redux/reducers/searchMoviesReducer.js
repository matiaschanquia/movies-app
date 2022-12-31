import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "../actions/actionsSearchMovies";

const initialState = {
    loading: false,
    movies: [],
    error: "",
}

const searchMovies = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                loading: false,
                error: "",
                movies: action.payload,
            }
        case FETCH_MOVIES_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload,
            }
        default:
            return state;
    }
}

export default searchMovies;