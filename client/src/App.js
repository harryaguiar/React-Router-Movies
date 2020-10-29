import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ SavedList]} />
      <div>
        <Route exact path="/" render={(props) => (
          <MovieList movies={movieList} 
          />
        )}
        />
        <Route path="/movies/:id" component={Movie}/>
      </div>
    </div>
  );
};

export default App;
