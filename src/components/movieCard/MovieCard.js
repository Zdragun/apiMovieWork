import React from 'react'
import '../movieCard/moviecard.css'
const MovieCard = ({ singlemovie }) => {
  return (
    <>
      <p>{singlemovie.original_title}</p>
      <p className='red'>{singlemovie.overview}</p>
      <img className='poster-img' src={`https://image.tmdb.org/t/p/w300/${singlemovie.poster_path}`} />
      <p>{singlemovie.popularity}</p>
      <p>{singlemovie.release_date}</p>
    </>
  )
}

export default MovieCard