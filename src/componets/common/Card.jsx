import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';
import ButtonLink from './Button.Link';
import Image from './Image';

const Card = ({ data, type }) => (
  <div className='col-10 mx-auto col-md-6 col-lg-3 my-4'>
    <div className='card card-odd-color p-1 h-100'>
      <Link
        className='hover'
        data-toggle='tooltip'
        title={data.title || data.name}
        to={`/${type}/${data.id}`}
      >
        <Image
          src={
            data.poster_path !== undefined || data.profile_path !== undefined
              ? `https://image.tmdb.org/t/p/original/${data.profile_path ||
                  data.poster_path}`
              : undefined
          }
          styleClass='card-img-top'
          alt={`${data.title || data.name} Image`}
        />
      </Link>
      <div className='card-body text-center px-0 py-2'>
        <h4 className='card-title font-weight-bolder text-dark mb-2'>
          {data.title || data.name}
        </h4>
        <p className='text-dark' />
        <p className='card-text text-dark'>
          {truncate(data.overview || data.biography, { length: 100 })}
        </p>
      </div>
      <div className='card-footer w-100 text-center'>
        <ButtonLink
          type='linkTag'
          linkAddres={`/${type}/${data.id}`}
          styleClass='btn-secondary'
          label='View More'
        />
      </div>
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string
};
