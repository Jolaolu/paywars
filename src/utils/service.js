import React, { useState, useEffect } from "react";
import axios from "axios";


export const useFetch = () => {
    const [ loading, setLoading ] = useState( true )
    const [ movies, setMovies ] = useState( [] );
    const [ error, setError ] = useState( false )

    useEffect(  () => {
        const fetchData = async () => {
          await axios.get( "https://swapi.co/api/films" )
                .then( response => {
                    setMovies( response.data.results )
                    setLoading( false )
                } )
                .catch( error => {
                    setError( error )
                } )
        }
        fetchData();
   
},[])
return { loading, movies, error }
};

// export const fetchCharacters =(charactersUrl) => {
//     const [ loading, setLoading ] = useState( true )
//     const [ characters, setCharacters ] = useState( [] );
//     const [ error, setError ] = useState( false )

//     const response = charactersUrl.map( characterUrl => {
//           axios.get( characterUrl )
//             .then(response => response.data.results)
//    }

//     )
//     useEffect( () => {
//        Promise.all(response)
//             .then( response => {
//                 console.log( response )
//                 setCharacters( response.data.results )
//                 setLoading( false )
//             } )
//             .catch( error => {
//                 setError( error )
//             } )
//     } )
//     return { loading, character, error }
// }

