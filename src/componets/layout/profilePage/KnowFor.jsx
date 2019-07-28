import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const KnowFor = ({ data, dispatch }) => {
  const knowTitles = data
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 8);

  return (
    <section className='knowFor pt-5'>
      <h3>
        <strong>Know For</strong>
      </h3>
      <div className='row'>
        {knowTitles.map((name, i) => (
          <div
            key={name.id * i}
            className='col-6 col-md-3 p-2 text-center h-100'
            style={{ width: '150px', height: '225px' }}
          >
            <Link
              className='hover'
              to={`/${name.media_type}/${name.id}`}
              onClick={() => dispatch({ type: 'SET_PAGE_DATA_UNMOUNT' })}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${name.poster_path}`}
                alt={name.title || name.name}
              />
            </Link>
            <Link
              to={`/${name.media_type}/${name.id}`}
              onClick={() => dispatch({ type: 'SET_PAGE_DATA_UNMOUNT' })}
              className='text-dark'
            >
              {name.title || name.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowFor;

KnowFor.propTypes = {
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};
