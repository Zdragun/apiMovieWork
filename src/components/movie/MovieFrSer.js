import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieList from '../movieList/MovieList';
import { URL } from '../../utils/variables';
const MovieFrSer = () => {
  const [dataMovie, setDataMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const axiosMovies = await axios.get(URL)
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