import React, { useContext } from 'react';
import { Context } from '../../Provider';
import Card from '../../common/Card';

const TvHome = () => {
  const { movieDBData } = useContext(Context);

  return (
    <>
      <main className='h-100 min-vh-100'>
        <section className='container mx-auto row my-5 h-100'>
          {movieDBData &&
            movieDBData.map(m => <Card key={m.id} data={m} type='tv' />)}
        </section>
      </main>
    </>
  );
};

export default TvHome;
