import React from 'react'
import MovieCard from '../movieCard/MovieCard'
import '../movieList/movielist.css'

const MovieList = ({ dataMovie, error, loading }) => {
    return (
        <main className='main-container'>
            {loading ? <h1 className='load'>Wait Data is Loading ...</h1> :
                error ? <h1 className='error'>Sorry the error is occurred</h1> :
                    dataMovie?.results?.map((singlemovie) => (
                        <div key={singlemovie.id}>
                        <MovieCard singlemovie={singlemovie} />
                        </div>
                    ))
            }
        </main>
    )
}

export default MovieList