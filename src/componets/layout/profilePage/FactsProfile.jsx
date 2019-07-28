import React from 'react';
import { Link } from 'react-router-dom';
import './factsProfile.scss';

const FactsProfile = ({ data, type }) => {
  return (
    <>
      {type === 'person' ? (
        <section style={factsBg} className='facts pt-5'>
          <h4 className='text-dark font-weight-bold mb-4'>Personal Info</h4>
          <p className='mb-4'>
            <strong>Known For</strong> {data.known_for_department}
          </p>
          <p className='mb-4'>
            <strong>Gender</strong> {data.gender === 1 ? 'Female' : 'Male'}
          </p>
          <p className='mb-4'>
            <strong>Known Credits</strong> {data.combined_credits.cast.length}
          </p>
          <p className='mb-4'>
            <strong>Birthday</strong> {data.birthday}
          </p>
          <p className='mb-4'>
            <strong>Place of Birth</strong> {data.place_of_birth}
          </p>
          <p className='mb-4'>
            <strong>Official Site</strong>{' '}
            {data.homepage ? (
              <a
                className='text-wrap '
                href={data.homepage}
                target='_blank'
                rel='noopener noreferrer'
              >
                {data.homepage}
              </a>
            ) : (
              '-'
            )}
          </p>
          <div className='also-Know mb-4'>
            <p className='mb-2'>
              <strong>Also Know As</strong>
            </p>

            <ul>
              {data.also_known_as.length === 0 && <p>N/A</p>}
              {data.also_known_as.map((name, i) => (
                <li key={i} className='mb-1'>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <section style={factsBg} className='facts pt-5'>
          <div className='social_links' />
          <h4 className='text-dark font-weight-bold mb-4'>Facts</h4>
          <p className='mb-4'>
            <strong>Status</strong> {data.status}
          </p>
          <p className='mb-4'>
            <strong>Release Date</strong>
            {data.release_date || data.first_air_date}
          </p>

          <p className='mb-4'>
            <strong>Original Language</strong> {data.original_language}
          </p>
          {type === 'tv' && (
            <div className='networks mb-4'>
              <p>
                <strong>Network</strong>
              </p>
              {data.networks.map(n => (
                <Link key={n.id} to='' className='d-block'>
                  <img
                    style={{ width: '120px' }}
                    src={`https://image.tmdb.org/t/p/original/${n.logo_path}`}
                    alt={n.name}
                  />
                </Link>
              ))}
            </div>
          )}
          <p className='mb-4'>
            <strong>Runtime</strong>
            {data.runtime || data.episode_run_time}
          </p>
          {type === 'movie' && (
            <>
              <p className='mb-4'>
                <strong>Budget</strong>{' '}
                {data.budget === 0 ? 'N/A' : data.budget}
              </p>
              <p className='mb-4'>
                <strong>Revenue</strong>{' '}
                {data.revenue === 0 ? 'N/A' : data.revenue}
              </p>
            </>
          )}
          <div className='genres mb-4'>
            <p className='text-dark '>
              <strong>Genres</strong>
            </p>

            <ul>
              {data.genres.length === 0 && <p>N/A</p>}
              {data.genres.map(g => (
                <li key={g.id}>
                  <Link className='btn btn-dark border m-1' to='/'>
                    {g.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='keywords  mb-4'>
            <h4>
              <strong>Keywords</strong>
            </h4>
            <ul>
              {(data.keywords.keywords || data.keywords.results).map(k => (
                <li key={k.id}>
                  <Link className='btn btn-small btn-dark border m-1' to='/'>
                    {k.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default FactsProfile;

const factsBg = { backgroundColor: '#F1F1F1' };
