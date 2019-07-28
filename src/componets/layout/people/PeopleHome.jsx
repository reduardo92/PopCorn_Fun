import React, { useContext } from 'react';
import { Context } from '../../Provider';
import Card from '../../common/Card';

const PeopleHome = () => {
  const { movieDBData } = useContext(Context);

  return (
    <>
      <main className='h-100 min-vh-100'>
        <section className='container mx-auto row my-5 h-100'>
          {movieDBData &&
            movieDBData.map(m => <Card key={m.id} data={m} type='person' />)}
        </section>
      </main>
    </>
  );
};

export default PeopleHome;
