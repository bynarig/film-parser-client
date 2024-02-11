import React, { useState } from 'react';
import "./MovieSearchComponent.scss"
const MovieSearchComponent = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);

  const cleanMovieTitle = (title) => {
    // Remove leading and trailing spaces
    title = title.trim();
    // Replace multiple spaces with a single space
    title = title.replace(/\s+/g, ' ');
    return title;
  };

  const fetchData = async () => {
  setLoading(true);
  try {
    const cleanedTitle = cleanMovieTitle(movieTitle);

    // Introduce a delay of 2 seconds using setTimeout
    await new Promise(resolve => setTimeout(resolve, 500));

    const response = await fetch(`http://localhost:3000/search/byTitle/${encodeURIComponent(cleanedTitle)}`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log('Fetched data:', data);

    // Check if the response has "Search" property which indicates it's a valid movie response
    if (data && data.Search) {
      setMovieData(data.Search); // Set movieData to the array of movies
    } else {
      throw new Error('Invalid response data');
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
    setMovieData(null); // Clear movieData on error
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
        <div className="loading-animation"></div> // Loading animation
      ) : movieData ? (
        movieData.map((movie, index) => (
          <div key={index}>
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default MovieSearchComponent;
