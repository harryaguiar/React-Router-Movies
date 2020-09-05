import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';



const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to={`/movies/${movie.id}`} style={{textDecoration: 'none', color: 'black'}}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
        
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <H2Tag>{title}</H2Tag>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList; 
 

const H2Tag = styled.h2`
color: blue;
text-decoration: none;
`



