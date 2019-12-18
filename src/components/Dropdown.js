import React from "react";

const Dropdown = React.memo(( { titles, handleSelectMovie } ) => {

    function handleClick (e) {
        handleSelectMovie( e.target.value );
    }
    return (
        <div className="dropdown">
            <form action="" className="select-movie">
                <label htmlFor="Movies">Choose a Movie</label>
                <select id="movies"  value={ titles.title } onChange={handleClick} >
                    <option> </option>
                    {  titles.map( movie => (
                        <option value={ movie.title } key={movie.episode_id}> { movie.title } </option>
                    ))}
                </select> 
            </form>

        </div>

    )
})
export default Dropdown;