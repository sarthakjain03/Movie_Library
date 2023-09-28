import React, { useContext, createContext, useState } from 'react'

const StateContext = createContext()

const initialTrendingLinks = {
    all: false,
    movie: false,
    tv: false
}

export const ContextProvider = ({children}) => {
    const [contentType, setContentType] = useState('all')
    // const [screenSize, setScreenSize] = useState(undefined)
    const [activeTrendingLink, setActiveTrendingLink] = useState(initialTrendingLinks)
    const [currentPage, setCurrentPage] = useState(1) //for pagination component

    const changeContentType = (clicked) => {
        setContentType(clicked)
    }

    const handleTrendingLinks = (clicked) => {
        setActiveTrendingLink({...initialTrendingLinks, [clicked]:true})
    }

    return (
        <StateContext.Provider
            value={{
                // screenSize, setScreenSize,
                contentType, setContentType,
                changeContentType, 
                activeTrendingLink, setActiveTrendingLink, 
                handleTrendingLinks,
                currentPage, setCurrentPage,
            }}
        >
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)