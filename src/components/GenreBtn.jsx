import React from 'react'

const GenreBtn = ({name}) => {
  return (
    <button type='button' className='text-white border-[1px] py-1 px-5 rounded-md hover:text-black hover:bg-white font-pagehead font-medium m-1' onClick={() => {}}>
        {name}
    </button>
  )
}

export default GenreBtn