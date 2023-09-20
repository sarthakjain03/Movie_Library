import React from 'react'

const Header = ({title}) => {
  return (
    <h1 className='flex justify-center items-center text-white text-3xl font-medium mt-6 uppercase font-pagehead'>
        {title}
    </h1>
  )
}

export default Header