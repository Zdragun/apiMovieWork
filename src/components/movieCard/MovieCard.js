import React from 'react'
import '../movieCard/moviecard.css'
import { AiOutlineStop } from 'react-icons/ai';
import { MdOutlineVerifiedUser } from 'react-icons/md'
const MovieCard = ({ singlemovie }) => {
  return (
    <>
      <div className='card-wrapper'>
        <div className='overview_cont'>
          <img className='poster-img'
            alt='posterimg'
            height={500}
            width={400}
            src={`https://image.tmdb.org/t/p/w300/${singlemovie.poster_path}`}
          />
        </div>
        <div className='desc-cont'>
          <div style={{ display: 'flex', listStyleType: 'none' }}><h1>{singlemovie.original_title}</h1> <li>{singlemovie.adult === false ? <MdOutlineVerifiedUser /> : <AiOutlineStop />}</li></div>
          <div className='description'>
            <h2>Main description:</h2>
            <p>{singlemovie.overview}</p>
          </div>
          <div className="rel-pop">
            <h3 className='desc-items'>Popularity:<span>{singlemovie.vote_average}</span></h3>
            <h3 className='desc-items'>{singlemovie.release_date + ` (${singlemovie.original_language})`}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard