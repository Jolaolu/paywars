import React, { useState, useEffect } from "react"
import { fetchCharacters, useFetch } from "../utils/service"
import Loader from '../components/Loader.js'
import Dropdown from "../components/Dropdown"
import Logo from "../Star_Wars_Logo..png"


const AppBody = React.memo( () => {

    const { loading, movies, error } = useFetch();
    console.log( loading, movies, error )
    const sortedMovies = movies.slice().sort( ( a, b ) => new Date( a.release_date ) - new Date( b.release_date ) )
    const [ selectedMovieData, setSelectedMovieData ] = useState()

    const [ selectedMovie, setSelectedMovie ] = useState( )

    const handleSelectMovie = ( e ) => {
        return setSelectedMovie( e )
    }



    useEffect( () => {
    //     // const getMovieData = () => {
        const getMovieData = sortedMovies.find( sortedMovie => selectedMovie === sortedMovie.title )
                setSelectedMovieData( getMovieData )
  
            console.log( selectedMovieData )

    //     // getMovieData();

    }, [ selectedMovie ] )





    if ( loading ) {
        return <Loader />
    }

    const showLogo = <img src={ Logo } className="starwars-image" />




    return (
        <main>
            <section className="top-section">
                <Dropdown titles={ sortedMovies } handleSelectMovie={ handleSelectMovie } />
                { !selectedMovie ? showLogo : '' }

            </section>
        </main>


    )
} )
export default AppBody;