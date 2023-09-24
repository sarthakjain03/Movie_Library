import React, { useEffect, useState } from 'react'

import { Header, GenreBtn, MovieCard } from '../components'
import axios from 'axios'

import { useStateContext } from '../context/ContextProvider'

const Movies = () => {
  const [genres, setGenres] = useState([])
  const [movieContent, setMovieContent] = useState([])

  const { movieList, changeMovieList } = useStateContext()

  const fetchGenres = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)

    setGenres(data.genres)
  }

  useEffect(() => {
    fetchGenres()
  }, [])

  const fetchMovieList = async (currentList) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${currentList}?api_key=${process.env.REACT_APP_API_KEY}`)

    setMovieContent(data.results)
  }

  useEffect(() => {
    fetchMovieList(movieList)
  }, [movieList])

  return (
    <div>
      <Header title="Movies" />
      <div className='flex justify-center'>
        <div className='flex flex-wrap items-center my-4'>
          { genres && genres.map((item) => <GenreBtn key={item.id} id={item.id} name={item.name} />) }
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex justify-around items-center my-4 md:w-[45%]'>
        <button type='button' className='text-white border-[1px] border-yellow-400 py-1 px-5 rounded-md hover:text-black hover:bg-yellow-400 font-pagehead font-medium m-1' onClick={() => changeMovieList('now_playing')}>Now Playing</button>
        <button type='button' className='text-white border-[1px] border-yellow-400 py-1 px-5 rounded-md hover:text-black hover:bg-yellow-400 font-pagehead font-medium m-1' onClick={() => changeMovieList('popular')}>Popular</button>
        <button type='button' className='text-white border-[1px] border-yellow-400 py-1 px-5 rounded-md hover:text-black hover:bg-yellow-400 font-pagehead font-medium m-1' onClick={() => changeMovieList('top_rated')}>Top Rated</button>
        <button type='button' className='text-white border-[1px] border-yellow-400 py-1 px-5 rounded-md hover:text-black hover:bg-yellow-400 font-pagehead font-medium m-1' onClick={() => changeMovieList('upcoming')}>Upcoming</button>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        { 
          movieContent && movieContent.map((item) => (
            <MovieCard key={item.id} id={item.id} poster={item.poster_path} title={item.title || item.name} rating={item.vote_average} media_type={'movie'} language={item.original_language} air_date={item.first_air_date || item.release_date} />
          )) 
        }
      </div>
    </div>
  )
}

export default Movies