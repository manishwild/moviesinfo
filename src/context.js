import React, { createContext, useContext, useState } from 'react'
import useFetch from './useFetch'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
console.log(API_ENDPOINT)

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('spider')
  const { isLoading, error, datas } = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider value={{ isLoading, error, datas, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
// always name (use) to naming
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
