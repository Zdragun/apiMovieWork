import React, { useEffect, useState } from 'react';
import '../MovieCard/MovieCard.css';
import { AiOutlineStop } from 'react-icons/ai';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import noimg from '../../public/images/noimg.jpg';
import Rating from 'react-rating-stars-component';

const MovieCard = ({ movie,handleWishList }) => {
  return (
    <>
      <div className='card-wrapper'>
        <div className='overview_cont'>
          <img className='poster-img'
            alt='posterimg'
            height={500}
            width={400}
            src={movie?.poster_path === null ? noimg : `https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        </div>
        <div className='desc-cont'>
          <div style={{ listStyleType: 'none',display:'flex'}}>
            <h1 style={{display:'flex',flex:1}}>{movie.original_title}
              <span>{movie.adult === false ? <MdOutlineVerifiedUser color={'aquamarine'} /> : <AiOutlineStop />}</span>
            </h1>
            { movie.inWishList ? <button className='heart-button butt1'><AiFillHeart onClick={()=>handleWishList(movie)} /></button> : <button className='heart-button butt2'><AiOutlineHeart   onClick={()=>handleWishList(movie)} /></button>}

          </div>
          <div className='description'>
            <h2>Main description:</h2>
            <p>{movie.overview}</p>
          </div>
          <div className="rel-pop">
            <h3 className='desc-items'><span>
               <Rating
              count={5}
              size={24}
              value={movie?.vote_average/2}
              isHalf={true}
              edit={false}
            /> </span></h3>
            <h3 className='desc-items'>{movie.release_date + ` (${movie.original_language})`}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard;