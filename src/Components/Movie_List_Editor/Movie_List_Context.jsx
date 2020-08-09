import React, { useState, createContext } from "react";

export const MovieListContext = createContext();

export const MovieListProvider = props => {
  const [MovieListEditor, setMovieListEditor] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create"
  });

  return (
    <MovieListContext.Provider value={[MovieListEditor, setMovieListEditor]}>
      {props.children}
    </MovieListContext.Provider>
  );
};
