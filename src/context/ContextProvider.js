import React, { useContext, createContext, useState } from 'react'

const StateContext = createContext()

const initialTrendingLinks = {
    all: false,
    movie: false,
    tv: false
}

const initialMovieLinks = {
    now_playing: false,
    popular: false,
    top_rated: false,
    upcoming: false
}

export const ContextProvider = ({children}) => {
    const [contentType, setContentType] = useState('all')
    const [movieList, setMovieList] = useState('now_playing')
    const [screenSize, setScreenSize] = useState(undefined)
    const [activeTrendingLink, setActiveTrendingLink] = useState(initialTrendingLinks)
    const [activeMovieLink, setActiveMovieLink] = useState(initialMovieLinks)

    const changeContentType = (clicked) => {
        setContentType(clicked)
    }

    const changeMovieList = (clicked) => {
        setMovieList(clicked)
    }

    const handleTrendingLinks = (clicked) => {
        setActiveTrendingLink({...initialTrendingLinks, [clicked]:true})
    }

    const handleMovieLinks = (clicked) => {
        setActiveMovieLink({...initialMovieLinks, [clicked]:true})
    }

    return (
        <StateContext.Provider
            value={{
                screenSize, setScreenSize,
                contentType, setContentType,
                changeContentType, 
                movieList, setMovieList, 
                changeMovieList, 
                activeTrendingLink, setActiveTrendingLink, 
                handleTrendingLinks,
                activeMovieLink, setActiveMovieLink,
                handleMovieLinks,
            }}
        >
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)