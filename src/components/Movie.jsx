import React from 'react';

function Movie(props) {
  const {
    Title: title,
    Year: year,
    ImdbID: id,
    Type: type,
    Poster: poster
  } = props;

  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {
          poster === 'N/A' ? <img className="activator" alt="asd" src="https://via.placeholder.com/400x400" /> : <img className="activator" alt="asd" src={poster} />
        }

      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>{year} <span className='right'>{type}</span></p>
      </div>
    </div>
  );
}

export { Movie };