export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

const fetchMoviesRequest = () => {
    return { type: FETCH_MOVIES_REQUEST, }
}

const fetchMoviesSuccess = (nameMovie) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: nameMovie,
    }
}

const fetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error,
    }
}

const fetchMovies = (nameMovie) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=1c3cdf5ac4214a9cddcf05c497d52208&query=${nameMovie}`)
            .then(response => response.json())
            .then(data => {
                if(!data.results || data.results.length === 0) {
                    alert("No se ha encontrado películas con ese título")
                    dispatch(fetchMoviesFailure("No se ha encontrado películas con ese título"));
                } else {
                    dispatch(fetchMoviesSuccess(data.results))
                }
            })
    }
}

export default fetchMovies;