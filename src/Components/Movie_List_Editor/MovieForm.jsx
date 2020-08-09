import React, { useContext, useState, useEffect } from "react"
import axios from "axios"
import { MovieListContext } from "./Movie_List_Context"

const MovieForm = () => {
  const [MovieListEditor, setMovieListEditor] = useContext(MovieListContext)
  const [input, setInput] = useState({ title: "", description: "", year: '', genre: '', duration: '', rating: '' })

  useEffect(() => {
    if (MovieListEditor.statusForm === "changeToEdit") {
      let movieList = MovieListEditor.lists.find(x => x.id === MovieListEditor.selectedId)
      setInput({ title: movieList.title, description: movieList.description, year: movieList.year, genre: movieList.genre, duration: movieList.duration, rating: movieList.rating })
      setMovieListEditor({ ...MovieListEditor, statusForm: "edit" })
    }
  }, [MovieListEditor])

  const handleChange = (event) => {
    let typeOfInput = event.target.name

    switch (typeOfInput) {
      case "title":
        {
          setInput({ ...input, title: event.target.value });
          break
        }
      case "description":
        {
          setInput({ ...input, description: event.target.value });
          break
        }
      case "year":
        {
          setInput({ ...input, year: event.target.value });
          break
        }
      case "genre":
        {
          setInput({ ...input, genre: event.target.value });
          break
        }
      case "duration":
        {
          setInput({ ...input, duration: event.target.value });
          break
        }
      case "rating":
        {
          setInput({ ...input, rating: event.target.value });
          break
        }
      default:
        { break; }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let title = input.title
    let year = input.year.toString()


    if (title.replace(/\s/g, '') !== "" && year.replace(/\s/g, '') !== "") {
      if (MovieListEditor.statusForm === "create") {
        axios.post(`http://backendexample.sanbercloud.com/api/movies`, { title: input.title, description: input.description, year: input.year, genre: input.genre, duration: input.duration, rating: input.rating })
          .then(res => {
            setMovieListEditor(
              {
                statusForm: "create", selectedId: 0,
                lists: [
                  ...MovieListEditor.lists,
                  {
                    id: res.data.id,
                    title: input.title,
                    description: input.description,
                    year: input.year,
                    genre: input.genre,
                    duration: input.duration,
                    rating: input.rating
                  }]
              })
          })
      } else if (MovieListEditor.statusForm === "edit") {
        axios.put(`http://backendexample.sanbercloud.com/api/movies/${MovieListEditor.selectedId}`, { title: input.title, description: input.description, year: input.year, genre: input.genre, duration: input.duration, rating: input.rating })
          .then(() => {
            let movieList = MovieListEditor.lists.find(el => el.id === MovieListEditor.selectedId)
            movieList.title = input.title
            movieList.description = input.description
            movieList.year = input.year
            movieList.genre = input.genre
            movieList.duration = input.duration
            movieList.rating = input.rating
            setMovieListEditor({ statusForm: "create", selectedId: 0, lists: [...MovieListEditor.lists] })
          })
      }

      setInput({ title: "", description: "", year: '', genre: '', duration: '', rating: '' })
    }

  }
  return (
    <>
      <h1 className='formSubject'>Form Daftar Harga Buah</h1>

      <form onSubmit={handleSubmit} className='formSubmit'>
        <label>Title:</label>
        <input type="text" name="title" value={input.title} onChange={handleChange} />
        <label>Desc:</label>
        <input type="text" name="description" value={input.description} onChange={handleChange} />
        <label>Year:</label>
        <input type="text" name="year" value={input.year} onChange={handleChange} />
        <label>Duration (menit):</label>
        <input type="number" name="duration" value={input.duration} onChange={handleChange} />
        <label>Genre:</label>
        <input type="text" name="genre" value={input.genre} onChange={handleChange} />
        <label>Rating:</label>
        <input type="number" name="rating" value={input.rating} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default MovieForm
