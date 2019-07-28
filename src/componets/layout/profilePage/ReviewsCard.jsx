import React from 'react';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';

const ReviewsCard = ({ data }) => {
  // console.log(data);
  return (
    <>
      <section className='reviews '>
        <h3>
          <strong>Review's</strong>
        </h3>
        {data.length === 0 ? (
          <p className='text-dark'>Sorry no reviews avaliable</p>
        ) : (
          data.slice(0, 1).map(r => (
            <div key={r.id} className='card shadow p-2 mb-3 bg-white rounded'>
              <div className='card-body'>
                <h5 className='card-title'>
                  <strong>A review by {r.author}</strong>
                </h5>
                <p className='card-text text-dark'>
                  {' '}
                  {truncate(r.content, { length: 800 })}
                </p>
              </div>
            </div>
          ))
        )}
        <Link to='' className='btn btn-secondary mb-2'>
          Read All Reviews
        </Link>
      </section>
    </>
  );
};

export default ReviewsCard;
