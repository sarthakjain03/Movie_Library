import React from 'react'

import { img_300 } from '../config'

const MovieCard = ({poster, title, rating}) => {
  return (
    <div className='m-6 p-2 w-[200px] bg-slate-700 rounded-lg relative'>
      <img src={`${img_300}/${poster}`} alt={title} className='rounded-lg' />
      <p className='text-white mt-2 text-center font-pagehead text-sm'>{title}</p>
    </div>
  )
}

export default MovieCard