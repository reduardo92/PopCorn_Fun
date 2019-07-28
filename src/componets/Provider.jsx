import React, { createContext, useReducer, useEffect } from 'react';
import UseDataApi from './hooks/useDataApi';

export const Context = createContext();

const movieInitalState = {
  apiKey: 'api_key=69a209b5d508b36379577751e571ebe9',
  current_page: 1,
  total_pages: 0,
  query: 'movie',
  movieDBData: {},
  pageData: {}
};

const useMovieReduce = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        movieDBData: action.payload
      };
    case 'SET_PAGE_DATA':
      return {
        ...state,
        pageData: action.payload
      };
    case 'SET_PAGE_DATA_UNMOUNT':
      return {
        ...state,
        pageData: {}
      };
    case 'SET_TOTAL_PAGES':
      return {
        ...state,
        total_pages: action.totalPages,
        query: action.newQuery
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        current_page: action.newCurrentPage
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: action.newQuery
      };
    default:
      return state;
  }
};

const Provider = props => {
  const [state, dispatch] = useReducer(useMovieReduce, movieInitalState);

  const { isError, isLoading, data, setUrl } = UseDataApi(
    `https://api.themoviedb.org/3/movie/now_playing?${
      movieInitalState.apiKey
    }&language=en-US&page=1
  `,
    []
  );

  useEffect(() => {
    dispatch({ type: 'SET_DATA', payload: data.results });
  }, [data]);

  return (
    <Context.Provider
      value={{
        ...state,
        dispatch,
        setUrl,
        isError,
        isLoading,
        data
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
