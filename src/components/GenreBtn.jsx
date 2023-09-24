import React from 'react'

const GenreBtn = ({id, name}) => {

  const normalLink = 'text-white border-[1px] py-1 px-5 rounded-md hover:text-black hover:bg-white font-pagehead font-medium m-1'
  const activeLink = 'border-[1px] py-1 px-5 rounded-md text-black g-white font-pagehead font-medium m-1'

  return (
    <button type='button' className={normalLink} onClick={() => {}}>
        {name}
    </button>
  )
}

export default GenreBtn