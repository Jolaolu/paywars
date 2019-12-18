import React, {useState} from "react";

const Dropdown = ( { titles, selectMovie } ) => {
    console.log( titles, selectMovie )
    let selected 
    function handleClick (e) {
        selectMovie( e.target.value );
    }
    return (
        <div className="dropdown">
            <form action="" className="select-movie">
                <label htmlFor="Movies">Movie Names</label>
                <select id="movies"  value={ titles.title } onChange={handleClick} >
                    <option> Choose a Movie</option>
                    {  titles.map( movie => (
                        <option value={ movie.title } key={movie.episode_id}> { movie.title } </option>
                    ))}
                </select> 
            </form>

        </div>

    )
}
export default Dropdown;