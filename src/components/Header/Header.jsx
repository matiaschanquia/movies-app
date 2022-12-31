import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/movie-icon.png";
import style from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt="logo movies app" />
                <h1>Movies App</h1>
            </div>
            <nav className={style.nav}>
                <ul>
                    <li>
                        <NavLink to="/home" className={({ isActive }) => isActive ? style.linkActive : ""}>
                            <span>Inicio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites" className={({ isActive }) => isActive ? style.linkActive : ""}>
                            <span>Favoritos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? style.linkActive : ""}>
                            <span>Sobre</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;