import React from 'react'
import '../MovieCard/MovieCard.css'
import { AiOutlineStop } from 'react-icons/ai';
import { MdOutlineVerifiedUser } from 'react-icons/md'
const MovieCard = ({ movie }) => {

  
  return (
    <>
      <div className='card-wrapper'>
        <div className='overview_cont'>
          <img className='poster-img'
            alt='posterimg'
            height={500}
            width={400}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        </div>
        <div className='desc-cont'>
          <div style={{ listStyleType: 'none' }}><h1>{movie.original_title}{movie.adult === false ? <MdOutlineVerifiedUser color={'aquamarine'} /> : <AiOutlineStop />}</h1></div>
          <div className='description'>
            <h2>Main description:</h2>
            <p>{movie.overview}</p>
          </div>
          <div className="rel-pop">
            <h3 className='desc-items'>Popularity:<span>{movie.vote_average}</span></h3>
            <h3 className='desc-items'>{movie.release_date + ` (${movie.original_language})`}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard