// import React, { useState, useEffect }  from "react"
import React, {useState} from "react"
import {fetchCharacters, useFetch} from "../utils/service"
import Loader from '../components/Loader.js'
import Dropdown from "../components/Dropdown"


const AppBody = () => {
    const { loading, movies, error } = useFetch();
    console.log( loading, movies, error )
    const [ selectedMovie, setSelectedMovie ] = useState()
     console.log(selectedMovie)
    if (loading){
        return <Loader/>
    }
   
    const selectMovie = (e) => {
       setSelectedMovie(e)
    }
 


    return(
        <main>
            <section>
                <Dropdown titles={ movies } selectMovie={ selectMovie} />
            </section>
        </main>

        
    )
}
export default AppBody;