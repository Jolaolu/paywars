import React, { useState, useEffect } from "react";
import Header from './components/Header.js'
import {fetchCharacters, useFetch} from "./utils/service"
// import Loader from './components/Loader.js'
import "./styles/main.scss"
import Dropdown from "./components/Dropdown"


const App = () => {
  const{loading, movies, error} = useFetch()
  console.log( loading, movies, error )
  return (
    <div className="App">
      <Header />
        <Dropdown movies={movies} />
      {/* <Loader/> */}
    </div>
  );
}

export default App;
