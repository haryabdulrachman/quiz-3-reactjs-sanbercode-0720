import React, { useContext, useEffect } from "react"
import axios from "axios"
import { MovieListContext } from "./Movie_List_Context"

const MovieList = () => {

  const [movieList, setMovieListEditor] = useContext(MovieListContext)

  useEffect(() => {
    if (movieList.lists === null) {
      // axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
        .then(res => {
          console.log(res.data)
          setMovieListEditor({
            ...movieList,
            lists: res.data.map(el => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                year: el.year,
                genre: el.genre,
                duration: el.duration,
                rating: el.rating
              }
            })
          })
        })
    }
  }, [setMovieListEditor])

  const handleEdit = (event) => {
    let idBuah = parseInt(event.target.value)
    setMovieListEditor({ ...movieList, selectedId: idBuah, statusForm: "changeToEdit" })
  }

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value)

    let newLists = movieList.lists.filter(el => el.id !== idBuah)

    axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idBuah}`)
      .then(res => {
        console.log(res)
      })

    setMovieListEditor({ ...movieList, lists: [...newLists] })

  }

  return (
    <>
      <h1 style={{ textAlign: 'center', paddingTop: '40px' }}>Daftar Harga Buah</h1>
      <table className='tableList'>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>

          {
            movieList.lists !== null && movieList.lists.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{ width: '40px' }}>{index + 1}</td>
                  <td style={{ width: '150px' }} > {item.title}</td>
                  <td style={{ width: '80px' }}>{item.description}</td>
                  <td style={{ width: '80px' }}>{item.year}</td>
                  <td>{item.duration} min</td>
                  <td style={{ width: '80px' }}>{item.genre}</td>
                  <td style={{ width: '80px' }}>{item.rating}</td>
                  <td>
                    <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </ table>
    </>
  )
}

export default MovieList
