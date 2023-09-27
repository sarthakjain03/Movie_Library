import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { useStateContext } from '../context/ContextProvider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faTv, faArrowTrendUp, faBars, faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const { screenSize, setScreenSize } = useStateContext()
    const [ mobileNav, setMobileNav ] = useState(false)
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    })

    useEffect(() => {
        if(screenSize <= 900){
          setMobileNav(true)
        } else {
          setMobileNav(false)
        }
    }, [screenSize])

    const handleToggleMobile = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
      <div className='shadow-md bg-gray-800 top-0 left-0'>
        <div className='flex justify-between items-center py-5 px-9'>
            <h1 className='text-2xl font-bold text-white cursor-pointer'>
                <span className='text-yellow-400'>Theatre</span>Lib
            </h1>
            <div className={`${mobileNav ? 'absolute right-8 top-4' : 'hidden'}`}>
                <button
                    className='text-white hover:text-black rounded p-2 hover:bg-white'
                    onClick={handleToggleMobile}
                >
                    {mobileMenuOpen ? (
                        <FontAwesomeIcon icon={faTimes} size='lg' />
                    ) : (
                        <FontAwesomeIcon icon={faBars} size='lg' />
                    )}
                </button>
            </div>
            <div className='flex justify-between items-center text-white w-1/3'>
                <NavLink 
                    to={'/movies'}
                    key={'movies'}
                    // onClick={() => {}}
                >
                    <div className='flex justify-center items-center flex-col'>
                        <FontAwesomeIcon icon={faFilm} style={{color: '#fff'}} className='pb-1 text-xl'/>
                        <p className='font-semibold'>Movies</p>
                    </div>
                </NavLink>
                <NavLink 
                    to={'/tvseries'}
                    key={'tvseries'}
                    // onClick={() => {}}
                >
                    <div className='flex justify-center items-center flex-col'>
                        <FontAwesomeIcon icon={faTv} style={{color: "#fff"}} className='pb-1 text-xl'/>
                        <p className='font-semibold'>TV Series</p>
                    </div>
                </NavLink>
                <NavLink 
                    to={'/trending'}
                    key={'trending'}
                    // onClick={() => {}}
                >
                    <div className='flex justify-center items-center flex-col'>
                        <FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#fff"}} className='pb-1 text-xl'/>
                        <p className='font-semibold'>Trending</p>
                    </div>
                </NavLink>
                <NavLink 
                    to={'/search'}
                    key={'search'}
                    // onClick={() => {}}
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