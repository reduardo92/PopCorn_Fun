import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../../common/Image';
import './cast.scss';

const Cast = ({ data, dispatch }) => (
  <>
    <section className='cast pt-5'>
      <h3 className='font-weight-bold text-dark mb-3'>Top Billed Cast</h3>
      <ul className='row'>
        {data.slice(0, 6).map(n => (
          <li key={n.id} className='col-6 col-md-4 col-lg  mb-3 px-lg-1'>
            <div className='card h-100 shadow-sm' style={{ maxWidth: '12rem' }}>
              <Link
                className='hover'
                to={`/person/${n.id}`}
                onClick={() => dispatch({ type: 'SET_PAGE_DATA_UNMOUNT' })}
              >
                <Image
                  src={
                    n.profile_path !== undefined
                      ? `https://image.tmdb.org/t/p/original/${n.profile_path}`
                      : undefined
                  }
                  styleClass='card-img-top'
                  alt={n.name}
                />
              </Link>
              <div className='card-body'>
                <Link
                  className='card-text text-dark font-weight-bold'
                  to={`/person/${n.id}`}
                  onClick={() => dispatch({ type: 'SET_PAGE_DATA_UNMOUNT' })}
                >
                  {n.name}
                </Link>
                <p className='card-text text-dark'>{n.character}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </>
);

export default Cast;

Cast.propTypes = {
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};
