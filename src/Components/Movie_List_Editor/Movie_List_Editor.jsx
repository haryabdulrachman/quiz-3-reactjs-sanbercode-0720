import React from "react"
import { MovieListProvider } from "./Movie_List_Context"
import MovieList from "./MovieList"
import MovieForm from "./MovieForm"
import "./Movie_List_Editor.css"

const Movie = () => {

  return (
    <div className='movie' style={{ backgroundColor: 'white', width: '80%', boxSizing: 'border-box', minHeight: '100vh', margin: '20px auto' }}>
      <MovieListProvider>
        <MovieList />
        <MovieForm />
      </MovieListProvider>
    </div>
  )
}

export default Movie
