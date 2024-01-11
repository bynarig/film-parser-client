import React, { useState, useEffect } from 'react';

const MovieSearchComponent = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState(null);
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
      setMovieData(data);
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
      ) : movieData ? (
        <div>
          <h2>{movieData.Title}</h2>
          <p>Year: {movieData.Year}</p>
          <p>Rated: {movieData.Rated}</p>
          <img src={movieData.Poster}></img>
          <p>Released: {movieData.Released}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default MovieSearchComponent;
