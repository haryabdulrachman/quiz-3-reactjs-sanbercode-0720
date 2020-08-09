import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import MovieListEditor from '../Movie_List_Editor/Movie_List_Editor'
import Nav from '../Nav/Nav';
// import { ThemeProvider } from './ThemeContext'

export default function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/movie-list-editor">
          <MovieListEditor x />
        </Route>

      </Switch>
      {/* </ThemeProvider> */}
    </>
  );
}
