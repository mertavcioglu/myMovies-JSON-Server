import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditMovie from "./components/EditMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [state, setState] = useState({
    title: "",
    rating: "",
    description: "",
    imageURL: "",
  });

  // AXIOS API
  useEffect(() => {
    async function getMovies() {
      const baseURL = "http://localhost:3002/moviesList";
      const response = await axios.get(baseURL);
      setMovies(response.data);
    }
    getMovies();
  }, []);

  // FETCH API
  // useEffect(() => {
  //   async function getMovies() {
  //     const baseURL = "http://localhost:3002/moviesList";
  //     const response = await fetch(baseURL);
  //     const fetchedMovies = await response.json();
  //     setMovies(fetchedMovies);
  //   }
  //   getMovies();
  // }, []);

  // AXIOS API
  async function deleteMovie(movie) {
    axios.delete(`http://localhost:3002/moviesList/${movie.id}`);
    const newMovieList = movies.filter((m) => m.id !== movie.id);
    setMovies(newMovieList);
  }

  // FETCH API
  // async function deleteMovie(movie) {
  //   const baseURL = `http://localhost:3002/moviesList/${movie.id}`;
  //   await fetch(baseURL, { method: "DELETE" });
  //   const newMovieList = movies.filter((m) => m.id !== movie.id);
  //   setMovies(newMovieList);
  // }

  function searchMovie(event) {
    setSearchQuery(event.target.value);
  }

  let filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
  });
  // .sort((a, b) => {
  //   return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
  // });

  async function addMovie(movie) {
    await axios.post(`http://localhost:3002/moviesList/`, movie);
    setMovies((prevArray) => [movie, ...prevArray]);
  }

  async function editMovie(movie) {
    const response = await axios.put(`http://localhost:3002/moviesList/${id}`);
    const movieData = response.data;
    setState({
      title: movieData.title,
      rating: movieData.rating,
      description: movieData.description,
      imageURL: movieData.imageURL,
    });

    const { title, rating, description, imageURL } = this.state;

    const id = this.props.match.param.id;

    const updatedMovie = {
      title,
      rating,
      description,
      imageURL,
    };
  }

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar SearchMovieProp={searchMovie} />
                  </div>
                </div>
                <MovieList
                  moviesProp={filteredMovies}
                  deleteMovieProp={deleteMovie}
                  // editMovieProp={editMovie}
                />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <React.Fragment>
                <AddMovie
                  onAddMovie={(movie) => {
                    addMovie(movie);
                  }}
                />
              </React.Fragment>
            }
          ></Route>

          <Route
            path="/edit/:id"
            element={
              <React.Fragment>
                <EditMovie
                  // movieRating={editMovie.movieData.rating}
                  // updatedMovie={id, updatedMovie}
                  onEditMovie={(id, movie) => {
                    editMovie(id, movie);
                  }}
                />
              </React.Fragment>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
