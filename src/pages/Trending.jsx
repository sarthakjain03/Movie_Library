import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import axios from 'axios'

import { MovieCard, Header } from '../components'
import { useStateContext } from '../context/ContextProvider';


const Trending = () => {

  const { contentType, changeContentType } = useStateContext()
  const [content, setContent] = useState([])

  const fetchTrending = async (currentContentType) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${currentContentType}/week?api_key=${process.env.REACT_APP_API_KEY}`)

    setContent(data.results)
  }

  useEffect(() => {
    fetchTrending(contentType)
  }, [contentType])

  return (
    <div>
      <Header title="Trending" />
      <div className='flex justify-center'>
        <div className='flex justify-around items-center my-4 md:w-[30%]'>
          <button type='button' className='text-white border-[1px] py-1 px-5 rounded-md hover:text-black hover:bg-white font-pagehead font-medium' onClick={() => changeContentType('all')}>ALL</button>
          <button type='button' className='text-white border-[1px] py-1 px-5 rounded-md hover:text-black hover:bg-white font-pagehead font-medium' onClick={() => changeContentType('movie')}>MOVIES</button>
          <button type='button' className='text-white border-[1px] py-1 px-5 rounded-md hover:text-black hover:bg-white font-pagehead font-medium' onClick={() => changeContentType('tv')}>TV SERIES</button>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        { 
          content && content.map((item) => (
            <MovieCard key={item.id} id={item.id} poster={item.poster_path} title={item.title || item.name} rating={item.vote_average} media_type={item.media_type} language={item.original_language} air_date={item.first_air_date || item.release_date} />
          )) 
        }
      </div>
    </div>
  )
}

export default Trending