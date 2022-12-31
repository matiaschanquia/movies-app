import React from "react";
import style from "./About.module.css";
import img from "../../assets/about.jpg";

export default function About(props) {
    return (
        <div className={style.containerAbout}>
            <figure>
                <img src={img} alt="Matias Chanquia"/>
            </figure>
            <div className={style.sobre}>
                <h2>Sobre la web:</h2>
                <p>Esta aplicación web permite buscar películas por titulo (en su lenguaje original) y agregar a favoritos. Tambien permite deshacer el favorito desde la misma búsqueda o desde la ruta Favoritos. Haciendo click en el título de la película permite ver más información sobre la misma.</p>
                <h2>Sobre mi:</h2>
                <p>Soy Matias Chanquia de Córdoba, Argentina, tengo 21 años y soy desarrollador frontend. Amante de la programación desde el 2020 que empecé con Python.</p>
                <p>Mi email es: <a href="mailto:matiaschanquianahuel@gmail.com">matiaschanquianahuel@gmail.com</a></p>
            </div>
        </div>
    );
}