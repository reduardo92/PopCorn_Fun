import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PopCorn_logo from '../../../img/popcorn_logo.png';

import Image from '../../common/Image';
import { Context } from '../../Provider';

const CustomNavbar = () => {
  const { apiKey, current_page, dispatch, setUrl, movieDBData } = useContext(
    Context
  );

  const urlSet = (url, type) => {
    setUrl(`https://api.themoviedb.org/3/${url}`);
    dispatch({
      type: 'SET_TOTAL_PAGES',
      totalPages: movieDBData && movieDBData.total_pages,
      newQuery: type
    });
  };

  return (
    <header className='bg-dark'>
      <Navbar
        bg='dark'
        variant='dark'
        expand='md'
        style={{
          backgroundColor: ' #020407',
          backgroundImage: 'linear-gradient(0deg, #020407 0%, #122e5a 100%)'
        }}
      >
        <Navbar.Brand>
          <Link
            style={{ color: '#fff' }}
            onClick={() =>
              urlSet(
                `movie/now_playing?${apiKey}&language=en-US&page=${current_page}`,
                'movie'
              )
            }
            className='navbar-brand'
            to='/movie'
          >
            <Image
              src={PopCorn_logo}
              alt='Popcorn Fun'
              style={{ width: '40px' }}
              styleClass='d-inline-block align-bottom'
            />
            PopCorn Fun
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink
              onClick={() =>
                urlSet(
                  `movie/now_playing?${apiKey}&language=en-US&page=${current_page}`,
                  'movie'
                )
              }
              className='nav-item nav-link'
              to='/movie'
            >
              MOVIES
            </NavLink>
            <NavLink
              onClick={() =>
                urlSet(
                  `tv/popular?${apiKey}&language=en-US&page=${current_page}`,
                  'tv'
                )
              }
              className='nav-item nav-link'
              to='/tv'
            >
              TV SHOWS
            </NavLink>
            <NavLink
              onClick={() =>
                urlSet(
                  `person/popular?${apiKey}&language=en-US&page=${current_page}`,
                  'person'
                )
              }
              className='nav-item nav-link'
              to='/person'
            >
              PEOPLE
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
