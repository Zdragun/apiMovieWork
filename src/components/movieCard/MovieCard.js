import React, { useEffect, useState } from 'react'
import '../MovieCard/MovieCard.css'
import { AiOutlineDelete, AiOutlineStop } from 'react-icons/ai';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import {AiOutlineHeart,aiOutlineDe} from 'react-icons/ai'
import axios from 'axios';
import { API_KEY } from '../../utils/constants'
import noimg from '../../public/images/noimg.jpg'
/* import Rating from 'react-rating-stars-component'; */
const MovieCard = ({ movie }) => {
  const [wishlist, setWishlist] = useState([]);
  const [wish,setWish] = useState(false)
  const [count, setCount] = useState(0);

  const addToWishlist = (movie) => {
    const isAlreadyInWishlist = wishlist.find((item)=>item === movie);

    if (isAlreadyInWishlist) {
      setWishlist([...wishlist.filter((item)=> item !== movie)])
      setWish(false);
      setCount((previousCount) => (Math.max(previousCount -= 1,0)));
    } else {
      setWishlist([...wishlist, movie]);
      setWish(true);
      setCount((previousCount) => previousCount += 1);
    }
  };


  useEffect(() => {
   console.log(wishlist);
  }, [wishlist]);


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
              {movie.adult === false ? <MdOutlineVerifiedUser color={'aquamarine'} /> : <AiOutlineStop />}
            </h1>
           <h1  style={{color: wish ? "#FFC0CB" : "#FFFFFF"}} ><AiOutlineHeart onClick={()=>{addToWishlist(movie)}} /></h1>
            <p>{count}</p>
          </div>
          <div className='description'>
            <h2>Main description:</h2>
            <p>{movie.overview}</p>
          </div>
          <div className="rel-pop">
            <h3 className='desc-items'>Popularity:{movie?.vote_average}<span>
              {/*   <Rating
              count={10}
              size={24}
              value={rating}
              onChange={handleRatingChange}
            /> */}</span></h3>
            <h3 className='desc-items'>{movie.release_date + ` (${movie.original_language})`}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard