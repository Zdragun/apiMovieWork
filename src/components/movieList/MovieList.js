import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import '../MovieList/movielist.css'

const MovieList = ({ dataMovie, error, loading }) => {
    return (
        <main className='main-container'>
            {loading ? <h1 className='load'>Wait Data is Loading ...</h1> :
                error ? <h1 className='error'>Sorry the error is occurred</h1> :
                    dataMovie?.map((movie) => (
                        <div key={movie.id}>
                        <MovieCard movie={movie} />
                        </div>
                    ))
            }
        </main>
    )
}

export default MovieList