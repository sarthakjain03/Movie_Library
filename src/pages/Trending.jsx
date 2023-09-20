import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { MovieCard, Header } from '../components'
// import { useStateContext } from '../context/ContextProvider';

const Trending = () => {

  const [content, setContent] = useState([])

  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)

    setContent(data.results)
  }

  useEffect(() => {
    fetchTrending()
  }, [])

  return (
    <div>
      <Header title="Trending" />
      <div>
        {/* { content && content.map((item) => <MovieCard />) } */}
      </div>
    </div>
  )
}

export default Trending