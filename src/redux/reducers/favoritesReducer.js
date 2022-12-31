import { ADD_FAV, DELETE_FAV } from "../actions/actionsFavorites";

const initialState = {
    myFavorites: [],
}

const favorites = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                myFavorites: [...state.myFavorites, action.payload],
            }
        case DELETE_FAV:
            return {
                myFavorites: state.myFavorites.filter(item => item.id !== action.payload),
            }
        default:
            return state;
    }
}

export default favorites;