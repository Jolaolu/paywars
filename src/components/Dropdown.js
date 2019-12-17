import React, { useState, useEffect } from "react";

const Dropdown = ( response ) => {
    console.log(response.movies)
    const [ movies, setMovie ] = useState();
    return (
        <div className="dropdown">
            <form action="">
                <label htmlFor="Movies">Movie Names</label>
                <select name="Movies" id="movies" value={ movies } onChange={ e => setMovie( e.target.value ) } onBlur={ e => setMovie( e.target.value ) }>
                    <option></option>
                    {  response.movies.map( movie => (
                        <option value={ movie.title } key={movie.title}> { movie.title } </option>
                    ))}
                </select> 
            </form>

        </div>

    )
}
export default Dropdown;