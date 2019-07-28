import React, { useState } from 'react';
import { groupBy } from 'lodash';

const AllCredits = ({ data: { cast, crew } }) => {
  const [active, setActive] = useState('movie');
  const allCredits = [...cast, ...crew]
    .map(i => {
      const year = i.release_date ? 'release_date' : 'first_air_date';
      i[year] =
        i[year] === undefined || i[year] === null ? '' : i[year].slice(0, 4);
      const dep = i.department ? i.department : i.media_type;
      return { ...i, date: i[year], dep };
    })
    .sort((a, b) => b.date - a.date);

  const { movie, tv } = groupBy(allCredits, 'media_type');
  const groupedMovie = groupBy(movie, 'dep');
  const groupedTv = groupBy(tv, 'dep');

  console.log('movie: ', groupedMovie);
  console.log('tv: ', groupedTv);

  const creditsDiv = arry =>
    Object.entries(arry).map(([key, value], index) => (
      <div key={index}>
        <h5>
          <strong>{key === active ? 'Acting' : key}</strong>
        </h5>
        {value.map(i => (
          <div
            key={`${i.id}${Math.random() * 2}`}
            className='d-flex p-2 my-3 rounded shadow-sm border border-light'
          >
            <span className='text-dark mr-4'>
              <strong>{i.date === '' ? '-' : i.date}</strong>
            </span>
            <span className='text-dark'>
              <strong className='d-block'>{i.title || i.name}</strong>
              {i.job ? `...${i.job}` : `as ${i.character}`}
            </span>
          </div>
        ))}
      </div>
    ));

  // console.log(groupedCrew);

  return (
    <section className='allCredits'>
      <div className='allCredits-head d-flex mb-4'>
        <h3 className='mr-auto'>
          <strong>Credits</strong>
        </h3>

        <button
          onClick={() => setActive('movie')}
          className='btn btn-secondary btn-sm m-1'
          disabled={active === 'movie' && true}
        >
          Movies
        </button>
        <button
          onClick={() => setActive('tv')}
          className='btn btn-secondary btn-sm m-1'
          disabled={active === 'tv' && true}
        >
          Tv Shows
        </button>
      </div>
      <div className='table'>
        {creditsDiv(active === 'movie' ? groupedMovie : groupedTv)}
      </div>
    </section>
  );
};

export default AllCredits;
