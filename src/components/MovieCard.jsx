import React from 'react'

import { img_300 } from '../config'

const MovieCard = ({poster, title, rating, media_type, language, air_date}) => {
  return (
    <div className='m-6 p-2 w-[200px] bg-slate-700 rounded-lg relative cursor-pointer border-2 border-slate-700 hover:border-yellow-300'>
      <img src={`${img_300}/${poster}`} alt={title} className='rounded-lg' />
      <p className='text-white mt-2 mb-2 text-center font-pagehead text-sm'>{title}</p>
      <div className='flex justify-between items-center mb-2'>
        <span className='uppercase text-gray-500 font-pagehead text-sm'>{media_type}</span>
        <span className='uppercase text-gray-500 font-pagehead text-sm'>{language}</span>
      </div>
      <div className='flex justify-between items-center'>
        <span className='uppercase text-gray-500 font-pagehead text-sm'>{air_date}</span>
        <span className='uppercase text-gray-500 font-pagehead text-sm'>{rating.toFixed(1)}</span>
      </div>
    </div>
  )
}

export default MovieCard