import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faTv, faArrowTrendUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    return (
      <div className='bg-gray-800 top-0 left-0'>
        <div className='flex justify-between items-center py-5 px-9'>
            <h1 className='text-2xl font-bold text-white cursor-pointer'>
                <span className='text-yellow-400'>Theatre</span>Lib
            </h1>
            
            <div className='flex justify-between items-center text-white md:w-[42%] lg:w-1/3'>
                <NavLink 
                    to={'/movies'}
                    key={'movies'}
                >
                    <div className='flex justify-center items-center flex-col'>
                        <FontAwesomeIcon icon={faFilm} style={{color: '#fff'}} className='pb-1 text-xl'/>
                        <p className='font-semibold'>Movies</p>
                    </div>
                </NavLink>
                <NavLink 
                    to={'/tvseries'}
                    key={'tvseries'}
                >
                    <div className='flex justify-center items-center flex-col'>
                        <FontAwesomeIcon icon={faTv} style={{color: "#fff"}} className='pb-1 text-xl'/>
                        <p className='font-semibold'>TV Series</p>
                    </div>
                </NavLink>
                <NavLink 
                    to={'/trending'}
                    key={'trending'}
                >
                    <div className='flex justify-center items-center flex-col'>
                        <FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#fff"}} className='pb-1 text-xl'/>
                        <p className='font-semibold'>Trending</p>
                    </div>
                </NavLink>
                <NavLink 
                    to={'/search'}
                    key={'search'}
                >
                    <div className='flex justify-center items-center flex-col'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#fff"}} className='pb-1 text-xl'/>
                        <p className='font-semibold'>Search</p>
                    </div>
                </NavLink>
            </div>
        </div>
      </div>
    )
}

export default Navbar