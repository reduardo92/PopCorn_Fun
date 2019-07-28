import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recommendations = ({ data, type, dispatch }) => {
  return (
    <section>
      <h3>
        <strong>Recommendations</strong>
      </h3>
      <div style={flexSlider}>
        {data.slice(0, 10).map(m => (
          <div
            key={m.id}
            className='thumbnail px-1 hover'
            style={{
              flexShrink: '0',
              position: 'relative',
              backgroundSize: 'cover',
              objectFit: 'cover'
            }}
          >
            <Link
              to={`/${type}/${m.id}`}
              onClick={() => dispatch({ type: 'SET_PAGE_DATA_UNMOUNT' })}
            >
              <div
                className='rounded'
                style={setImg(m.backdrop_path)}
                data-toggle='tooltip'
                title={m.title || m.name}
              />
            </Link>

            <p className='text-dark font-weight-bold'>
              {m.title || m.name}{' '}
              <span className='text-dark float-right mr-2'>
                {m.vote_average}{' '}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;

const flexSlider = {
  display: 'flex',
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
  scrollSnapPointsX: 'repeat(400px)',
  scrollSnapType: 'mandatory'
};

const setImg = id => ({
  backgroundImage: `url(https://image.tmdb.org/t/p/original/${id}`,
  backgroundSize: 'cover',
  objectFit: 'cover',
  width: '300px',
  height: '200px'
});

Recommendations.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};
