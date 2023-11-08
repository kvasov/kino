import React from 'react';
import { Movie } from './Movie'

function Movies(props) {
  const {movies, responseStatus} = props;

  return <div className="movies">
    {responseStatus === 'True' ? movies.map(movie => {
      return <Movie key={movie.imdbID} {...movie} />
    }) : 'not found'}
  </div>;
}

export { Movies };