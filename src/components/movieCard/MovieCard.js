import React from 'react'
import '../movieCard/moviecard.css'
const MovieCard = ({ singlemovie }) => {
  return (
    <>{
      <p>{singlemovie.original_title}</p>
    }</>
  )
}

export default MovieCard