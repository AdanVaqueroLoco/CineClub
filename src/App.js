import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = 'https://www.omdbapi.com?i=tt3896198&apikey=7eb8c7ed';

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("Batman");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };
  
    return (
      <div className="app">
      <h1>CineClub</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
    );
  };
  
  export default App;



//return (
//  <div className="app">
//    <h1>Cine Club</h1>
//
//      <div className="search">
//        <input
//          value={searchTerm}
//          onChange={(e) => setSearchTerm(e.target.value)}
//          placeholder="Search for movies"
//        />
//        <img
//          src={SearchIcon}
//          alt="search"
//          onClick={() => searchMovies(searchTerm)}
//        />
//      </div>
//
//      {movies?.length > 0 ? (
//        <div className="container">
//          {movies.map((movie) => (
//            <MovieCard movie={movie} />
//          ))}
//        </div>
//      ) : (
//        <div className="empty">
//          <h2>No movies found</h2>
//        </div>
//      )}
//    </div>
//  );