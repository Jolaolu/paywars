import React, { useState, useEffect } from "react";
import Header from './components/Header.js'
import AppBody from "./views/AppBody"


import "./styles/main.scss"



const App = () => {
 

  return (
    <div className="App">
      <Header />
      <AppBody/>
    </div>
  );
}

export default App;
