import React, { useState } from "react";
import { connect } from "react-redux";
import fetchMovies from "../../redux/actions/actionsSearchMovies";
import Movie from "../Movie/Movie";
import style from "./Search.module.css";

function Search(props) {
    const [title, setTitle] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        let nameMovie = title.trim();
        nameMovie = nameMovie.replace(/ /g, "+");
        props.fetchMovies(nameMovie);
    }

    return (
        <div className={style.containerSearch}>
            <form className={style.form} onSubmit={submitHandler}>
                <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <button type="submit">Buscar</button>
            </form>
            {
                props.searchMovies.loading && <div className={style.loading}> <img className="imgLoading" src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png" alt="loading"/> </div>
            }
            <div className={style.containerMovies}>
                {
                    props.searchMovies.movies.length === 0 ? 
                    <h3 className={style.titleSinBusqueda}>Realice una búsqueda de películas.</h3> :
                        props.searchMovies.error ?
                        <h3 className={style.titleSinBusqueda}>{props.searchMovies.error}</h3> :
                            props.searchMovies.movies.map(movie => <Movie key={movie.id} image={movie.poster_path} title={movie.original_title} date={movie.release_date && movie.release_date.substr(0, 4)} id={movie.id}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchMovies: state.searchMovies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (nameMovie) => dispatch(fetchMovies(nameMovie)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);