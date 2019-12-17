import React from 'react';
import Logo from "../starwarslogo.png";


const Header =  () => {
    return (
        <header className="App-header">
            <img src={Logo} alt="Star wars Logo"/>
        </header>  
    );
}
export default Header;