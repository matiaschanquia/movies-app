import React from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
import style from "./Favorites.module.css";

function Favorites(props) {
    return (
        <div className={style.containerFavs}>
            {
                props.myFavorites.length === 0 ? <h2 className={style.sinFavs}>Sin favoritos.</h2> :
                props.myFavorites.map(movie => {
                    return <Movie key={movie.id} id={movie.id} image={movie.image} title={movie.title} date={movie.date}/>
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.favorites.myFavorites,
    }
}


export default connect(mapStateToProps, null)(Favorites);