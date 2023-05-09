import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { URL, API_KEY } from '../../utils/constants';
import Navbar from '../Navbar/Navbar';

const MoviesFromServer = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('')


  const fetchMovies = async () => {
    try {
      setLoading(true);
      const axiosMovies = await axios.get(URL)
      setDataMovie(axiosMovies.data.results);
      setMasterData(axiosMovies.data.results)
    } catch (error) {
      setError(error)
    }
    finally {
      setLoading(false)
    }
  }

  const fetchFilter = async (text) => {
    try {
      setLoading(true);
      const axiosQueryMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}`)
      const newData = axiosQueryMovie.data.results;
      if (text) {
        const filteredData = newData.filter((item) => {
          const itemDataOverview = item.overview ? item.overview.toUpperCase() : ''.toUpperCase();
          const itemDataTitle = item.original_title ? item.original_title.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemDataOverview.includes(textData) || itemDataTitle.includes(textData);
        });
        setDataMovie(filteredData);
        setSearch(text);
      }
      else {
        setDataMovie(newData);
        setSearch(text);
      }
    } catch (error) {
      setError(error)
    }
    finally {
      setLoading(false)
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      fetchMovies();
    } else {
      fetchFilter(search);
    }
  }


  useEffect(() => {
    fetchMovies();

  }, [])
  return (
    <>
      <Navbar
        search={search}
        /*  fetchFilter={fetchFilter} */
        handleSubmit={handleSubmit}
        setSearch={setSearch}
      />
      <MovieList
        loading={loading}
        dataMovie={dataMovie}
        erorr={error}
      />
    </>
  )
}

export default MoviesFromServer;