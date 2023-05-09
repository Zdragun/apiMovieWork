import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { URL } from '../../utils/constants';
import Navbar from '../Navbar/Navbar';

const MovieFrSer = () => {
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
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemDataOverview = item.overview ? item.overview.toUpperCase() : ''.toUpperCase();
        const itemDataTitle = item.original_title ? item.original_title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemDataOverview.includes(textData) || itemDataTitle.includes(textData);
      });
      setDataMovie(newData);
      setSearch(text)
    }
    else {
      setDataMovie(masterData);
      setSearch(text);
    }
  }

 
   
    const handleSubmit = (e) => {
      e.preventDefault();
      searchFilter(search);
    }
  

  useEffect(() => {
    fetchMovies();
  }, [])
  return (
    <>
      <Navbar
        search={search}
        searchFilter={searchFilter}
        handleSubmit = {handleSubmit}
       setSearch={setSearch}
      />
      <div>
        <MovieList
          loading={loading}
          dataMovie={dataMovie}
          erorr={error}
        />
        {console.log(dataMovie)}
      </div>
    </>
  )
}

export default MovieFrSer;