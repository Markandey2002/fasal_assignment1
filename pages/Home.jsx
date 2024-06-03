import React, { useState, useEffect } from 'react';
import fetchMovies from '../component/FetchMovies';
import MovieList from '../component/MovieList';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const movieList = await fetchMovies(searchTerm);
      setMovies(movieList);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTrendingMovies = async () => {
    try {
      const movieList = await fetchMovies('Avengers'); // Example search term for trending movies
      setTrendingMovies(movieList);
    } catch (error) {
      console.error("Failed to fetch trending movies", error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <header className="header">
        <div className="app-name">MovieApp</div>
        <nav className="nav">
          <a href="/Signin" className="nav-link">Login</a>
          <a href="/Signup" className="nav-link">Sign Up</a>
        </nav>
      </header>
      <div className="container">
        <h1>Movie Search</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {loading ? <div className="loading">Loading...</div> : <MovieList list={{ name: `Search Results for "${searchTerm}"`, movies }} />}
      </div>
      <div className="carousel">
        <h2>Trending Movies</h2>
        <MovieList list={{ name: 'Trending Movies', movies: trendingMovies }} />
      </div>
    </div>
  );
};

export default Home;
