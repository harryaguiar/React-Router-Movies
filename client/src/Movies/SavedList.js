import React from 'react';
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">
      <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link>
      </div>
      <Route path="/" />
  </div>
  
);

export default SavedList;


const StyledLink = styled(Link)`
text-decoration: none;`
