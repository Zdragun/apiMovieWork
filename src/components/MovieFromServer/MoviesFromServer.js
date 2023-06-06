import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { URL, API_KEY } from '../../utils/constants';
import Navbar from '../Navbar/Navbar';
import { toast } from 'react-toastify';

const MoviesFromServer = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [wishList, setWishList] = useState([]);


  const fetchMovies = async () => {
    try {
      setLoading(true);
      const axiosMovies = await axios.get(URL);
      const wishListLocalStorage = localStorage.wishList ? JSON.parse(localStorage.wishList) : [];
      setWishList(wishListLocalStorage);
      setDataMovie(axiosMovies.data.results.map(item => wishListLocalStorage.some((movie)=>movie.id === item.id)  ? { ...item, inWishList: true } : item));

    } catch (error) {
      setError(error);
    }
    finally {
      setLoading(false);
    }
  }

  const fetchFilter = async () => {
    try {
      setLoading(true);
      const axiosQueryMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
      const newData = axiosQueryMovie.data.results;
      setDataMovie(newData.map(item => wishList.some((movie)=> movie.id === item.id) ? { ...item, inWishList: true } : item));
    } catch (error) {
      setError(error);
    }
    finally {
      setLoading(false);
    }
  }

  const handleWishList = (movie) => {
    const inWishList = wishList.some((item) => item?.id === movie?.id);
    let newWishList = wishList;

    if (inWishList) {
      newWishList = newWishList.filter((item) => item?.id !== movie?.id);
      setDataMovie(prevData => prevData.map(item => item?.id === movie?.id ? { ...item, inWishList: false } : item));
      toast.error("Removed from Wishlist Successfully");
    } else {
      newWishList = [...newWishList, movie];
      setDataMovie(prevData => prevData.map(item => item?.id === movie?.id ? { ...item, inWishList: true } : item));
      toast.success("Added to Wishlist Successfully");
    }
    setWishList(newWishList);
    localStorage.wishList = JSON.stringify(newWishList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      fetchFilter();
      toast.info(`Finded film:${search} successfully`)
    
  }


  useEffect(() => {
    fetchMovies();
  }, [])


  const handleReset = () => {
    setSearch('');
    fetchMovies();
  }

  return (
    <>
      <Navbar
        search={search}
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        handleReset={handleReset}
      />
      <MovieList
        handleWishList={handleWishList}
        loading={loading}
        dataMovie={dataMovie}
        erorr={error}
      />
    </>
  )
}

export default MoviesFromServer;