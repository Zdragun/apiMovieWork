import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieList from '../movieList/MovieList';

const MovieFrSer = () => {
  const [dataMovie, setDataMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const API_KEY = "ad068439ab9c59bef99a826da8ba2ac9";
      const axiosMovies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      setDataMovie(axiosMovies.data);

    } catch (error) {
      setError(error)
    }
    finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchMovies();
  }, [])
  return (
    <div>
      <MovieList
        loading={loading}
        dataMovie={dataMovie}
        erorr={error}
      /> 
  {console.log(dataMovie)}
    </div>
  )
}

export default MovieFrSer;