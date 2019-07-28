import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonLink from '../../common/Button.Link';
import { truncate } from 'lodash';
import Modal from 'react-bootstrap/Modal';

const TextProfile = ({ type, data, back, dispatch }) => {
  const [toggle, setToggle] = useState(false);

  const title = (
    <>
      <h2>
        {data.title || data.name}
        {type === 'person' ? (
          ''
        ) : (
          <small>
            {' '}
            ({(data.first_air_date || data.release_date).slice(0, 4)})
          </small>
        )}
      </h2>
      <br />

      <ButtonLink
        type='aTag'
        linkAddres={`https://www.imdb.com/${
          type === 'person' ? 'name' : 'title'
        }/${data.imdb_id || data.external_ids.imdb_id}`}
        styleClass='btn-warning m-1'
        label='IMDB'
      />
      <button className='btn btn-secondary m-1' onClick={back}>
        Go Back
      </button>
      <br />
      <br />
    </>
  );

  const plot = (
    <>
      <div className='plot'>
        <h5>{type === 'person' ? 'Biography' : 'Overview'}</h5>
        <p>{truncate(data.overview || data.biography, { length: 550 })}</p>
        {data[type === 'person' ? 'biography' : 'overview'].length < 500 ? (
          ''
        ) : (
          <div className='text-center'>
            <button
              onClick={() => {
                setToggle(true);
              }}
              className='btn btn-success rounded-pill'
            >
              view All
            </button>
          </div>
        )}
      </div>
    </>
  );

  const checkType = {
    movie: (
      <>
        <div className='row'>
          {data.credits &&
            data.credits.crew
              .filter(
                c =>
                  c.job === 'Director' ||
                  c.job === 'Screenplay' ||
                  c.job === 'Producer'
              )
              .map(c => (
                <div
                  key={`${c.id}${c.job}`}
                  className='col-12 col-md-6 col-lg-4'
                >
                  <Link
                    onClick={() => dispatch({ type: 'SET_PAGE_DATA_UNMOUNT' })}
                    to={`/person/${c.id}`}
                    className='font-weight-bold text-light'
                  >
                    {c.name}
                  </Link>
                  <small className='d-block mt-1'>{c.job}</small>
                </div>
              ))}
        </div>
      </>
    ),
    tv: (
      <>
        {/* Creators */}
        <div className='row'>
          {data.created_by &&
            data.created_by.map(name => (
              <div key={name.id} className='col-12 col-md-4'>
                <Link
                  onClick={() => dispatch({ type: 'SET_PAGE_DATA_UNMOUNT' })}
                  to={`/person/${name.id}`}
                  className='font-weight-bold text-light'
                >
                  {name.name}
                </Link>
                <small className='d-block mt-1'>Creator</small>
              </div>
            ))}
        </div>
      </>
    ),
    person: ''
  };

  return (
    <>
      <div className='col-10 mx-auto col-md-7 mt-5'>
        {title}
        {plot}
        {checkType[type]}
      </div>
      <Modal centered size='lg' show={toggle} onHide={() => setToggle(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='text-dark'>
            {type === 'person' ? 'Biography' : 'Overview'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p
            style={{ lineHeight: '2', maxWidth: '95%', margin: '0 auto' }}
            className='text-dark'
          >
            {data.overview || data.biography}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TextProfile;

TextProfile.propTypes = {
  data: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  back: PropTypes.func.isRequired
};
