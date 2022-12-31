import React, { useEffect, useState } from "react";
import style from "./Movie.module.css";
import { connect } from "react-redux";
import { addFav, deleteFav } from "../../redux/actions/actionsFavorites";
import { NavLink } from "react-router-dom";

function Movie(props) {
    const [isFav, setIsFav] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        props.myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
                setIsFav(true);
            }
        });
    }, [props.myFavorites, props.id]);

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            props.deleteFav(props.id);
        } else {
            setIsFav(true);
            props.addFav({
                date: props.date,
                id: props.id,
                image: props.image,
                title: props.title,
            });
        }
    };

    const loadHandler = () => {
        setLoading(false);
    };

    return (
        <div className={style.containerMovie}>
            {isFav ? (
                <button className={style.botonFav} onClick={handleFavorite}>
                    ❤️
                </button>
            ) : (
                <button className={style.botonFav} onClick={handleFavorite}>
                    🤍
                </button>
            )}
            <figure>
                {props.image ? (
                    <img
                        onLoad={loadHandler}
                        className={loading ? style.isLoading : ""}
                        src={`https://image.tmdb.org/t/p/original${props.image}`}
                        alt={props.title}
                    />
                ) : (
                    <img
                        onLoad={loadHandler}
                        className={loading ? style.isLoading : ""}
                        src="https://rincondelceramista.com.ar/wp-content/uploads/woocommerce-placeholder-400x400.png"
                        alt="sin portada"
                    />
                )}
                {loading && (
                    <img
                        className={style.imgLoading}
                        src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png"
                        alt="loading"
                    />
                )}
            </figure>
            <NavLink to={`/movie/${props.id}`}>
                <h3>{props.title}</h3>
            </NavLink>
            {props.date ? <h4>{props.date}</h4> : <h4>Sin fecha</h4>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.favorites.myFavorites,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (movie) => dispatch(addFav(movie)),
        deleteFav: (id) => dispatch(deleteFav(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
