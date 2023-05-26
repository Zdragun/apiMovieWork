import React, { Fragment } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import '../MovieList/MovieList.css'

const MovieList = ({ dataMovie, error, loading }) => {
    console.log(dataMovie)
    return (
        <main className='main-container'>
            {loading ? <h1 className='load'>Wait Data is Loading ...</h1> :
                error ? <h1 className='error'>Sorry the error is occurred</h1> :
                    dataMovie?.map((movie) => (
                        <Fragment key={movie.id}>
                        <MovieCard movie={movie} />
                        </Fragment>
                    ))
            }
        </main>
    )
}

export default MovieList