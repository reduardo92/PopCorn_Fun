import React, { useRef, useContext } from 'react';
import ButtonLink from '../../common/Button.Link';
import { Context } from '../../Provider';
import './searchInputHome.scss';

const SearchInput = Props => {
  const { apiKey, current_page, query, dispatch, data, setUrl } = useContext(
    Context
  );

  const searchIn = useRef('');
  // // Handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    if (!searchIn.current.value === '') return;
    setUrl(
      `https://api.themoviedb.org/3/search/${query}?${apiKey}&language=en-US&page=${current_page}&include_adult=false&query=${
        searchIn.current.value
      }
      `
    );
    dispatch({
      type: 'SET_TOTAL_PAGES',
      totalPages: data.total_pages,
      newQuery: query
    });
    // console.log(searchIn.current.value, query, current_page, data);
    searchIn.current.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ maxWidth: '800px' }} className='input-group mx-auto w-100'>
        <input
          className='form-control'
          placeholder='look for something...'
          name='searchIn'
          type='text'
          ref={searchIn}
        />
        <div className='input-group-prepend'>
          <ButtonLink type='buttonTag' styleClass='btn-danger' label='Search' />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
