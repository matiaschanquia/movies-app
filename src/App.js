import React from "react";
import Header from "./components/Header/Header";
import style from "./App.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";

function App() {

  return (
    <div className={style.containerApp}>
      <Header />
      <Routes>
        <Route path="/home" element={ <Search /> }/>
        <Route path="/favorites" element={ <Favorites /> }/>
        <Route path="/about" element={<About />}/>
        <Route path="/movie/:id" element={<Detail />}/>
        <Route path="/" element={ <Navigate to="/home" />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
