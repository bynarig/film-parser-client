import React, { useState } from 'react';

const MovieSearchComponent = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/search/byTitle/${encodeURIComponent(movieTitle)}`);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log('Fetched data:', data);
      setMovieData(prevData => [...prevData, data]); // Append new data to existing data array
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <label>
        Enter Movie Title:
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </label>
      {loading ? (
        <p>Loading...</p>
      ) : movieData.length > 0 ? (
        movieData.map((response, index) => (
          <div key={index}>
            <h2>Response {index + 1}</h2>
            {response.Response === "True" ? (
              response.Search.map((movie, movieIndex) => (
                <div key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>Year: {movie.Year}</p>
                  <p>Type: {movie.Type}</p>
                  <img src={movie.Poster} alt={movie.Title}></img>
                </div>
              ))
            ) : (
              <p>No data found</p>
            )}
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default MovieSearchComponent;
