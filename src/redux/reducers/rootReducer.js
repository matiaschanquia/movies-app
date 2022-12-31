import { combineReducers } from "redux";
import searchMovies from "./searchMoviesReducer";
import favorites from "./favoritesReducer";

const rootReducer = combineReducers({
    searchMovies,
    favorites,
})

export default rootReducer;