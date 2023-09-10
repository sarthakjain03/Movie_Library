import React from 'react'
import { SearchBar, MovieList } from "../components";

import { useStateContext } from '../context/ContextProvider';

const LandingPage = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-10'>
        <h1 className='text-6xl font-semibold'>Movies Library</h1>
      </div>
    </div>
  )
}

export default LandingPage