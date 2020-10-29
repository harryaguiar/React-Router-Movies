import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <StyledLink to={`/movies/${movie.id}`}>
    <div className="movie-card">
      <H2Tag>{title}</H2Tag>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    </StyledLink>
  );
}

export default MovieList;


const H2Tag = styled.h2`
color: gray;
text-decoration: none;
`

const StyledLink = styled(Link)`
  color: green;
  font-weight: italic;
  &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;}`