import React, { useContext, createContext, useState } from 'react'

const StateContext = createContext()

export const ContextProvider = ({children}) => {
    const [contentType, setContentType] = useState('all')
    const [screenSize, setScreenSize] = useState(undefined)

    const changeContentType = (clicked) => {
        setContentType(clicked)
      }

    return (
        <StateContext.Provider
            value={{
                screenSize, setScreenSize,
                contentType, setContentType,
                changeContentType, 
            }}
        >
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)