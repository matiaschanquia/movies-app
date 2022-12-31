import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

function Detail(props) {
    const [state, setState] = useState({
        original_title: "",
        genres: [],
        overview: "",
        poster_path: "",
        production_companies: [],
        release_date: "",
    });
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1c3cdf5ac4214a9cddcf05c497d52208`)
            .then(response => response.json())
            .then(data => {
                setState({...state, ...data});
                setLoading(false);
            })
    }, [id, state])

    return (
        <div className={style.containerDetail}>
            {
                loading ? <img className={style.loadingDetail} src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png" alt="loading"/> :
                    <>
                        <figure>
                            {
                                state.poster_path && <img src={`https://image.tmdb.org/t/p/original${state.poster_path}`} alt={state.original_title} />
                            }
                        </figure>
                        <div className={style.infoDetail}>
                            <h2>Título: {state.original_title}</h2>
                            <h3>Fecha de lanzamiento: {state.release_date}</h3>
                            <h4>Sobre:</h4>
                            <p>{state.overview}</p>
                            <h5>Géneros:</h5>
                            <ul>
                                {
                                    state.genres.map(item => <li key={item.name}>{item.name}</li>)
                                }
                            </ul>
                            <h5>Producción:</h5>
                            <ul>
                                {
                                    state.production_companies.map(item => <li key={item.name}>{item.name}</li>)
                                }
                            </ul>
                        </div>
                    </>
            }
        </div>
    );
}

export default Detail;