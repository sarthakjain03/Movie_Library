import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { MovieCard, Header } from '../components'
// import { useStateContext } from '../context/ContextProvider';

const Trending = () => {

  const [content, setContent] = useState([])

  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)

    console.log(data.results)
    setContent(data.results)
  }

  useEffect(() => {
    fetchTrending()
  }, [])

  return (
    <div>
      <Header title="Trending" />
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