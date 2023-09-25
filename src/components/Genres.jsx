import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Chip } from '@mui/material'

const Genres = ({type, selectedGenres, setSelectedGenres, genres, setGenres}) => {

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres()
  }, [])

  const handleAddSelected = (genre) => {
    setSelectedGenres([...selectedGenres, genre])
    setGenres(genres.filter((g) => g.id!==genre.id))
  }

  const handleRemoveSelected = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g.id!==genre.id))
    setGenres([...genres, genre])
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center items-center my-3">
        { selectedGenres && selectedGenres.map((genre) => (
          <Chip 
            key={genre.id}
            variant='outlined'
            label={genre.name}
            clickable
            color='secondary'
            onDelete={() => handleRemoveSelected(genre)}
            style={{margin: 3, color: 'white'}}
          />
        )) }
        { genres && genres.map((item) => (
          <Chip 
            key={item.id}
            variant='outlined'
            label={item.name}
            clickable
            onClick={() => handleAddSelected(item)}
            style={{margin: 3, color: 'white'}}
          />
        )) }
      </div>
    </div>
  )
}

export default Genres