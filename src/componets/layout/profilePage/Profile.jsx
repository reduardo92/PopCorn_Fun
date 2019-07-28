import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import Spinner from '../../common/spinner';
import ImgProfile from './ImgProfile';
import TextProfile from './TextProfile';
import Cast from './Cast';
import FactsProfile from './FactsProfile';
import ReviewsCard from './ReviewsCard';
import TrailerCard from './TrailerCard';
import Recommendations from './Recommendations';
import Seasons from './Seasons';
import KnowFor from './KnowFor';
import AllCredits from './AllCredits';
import { Context } from '../../Provider';

const Profile = ({ match, history }) => {
  const { type } = match.params;

  const { apiKey, dispatch, pageData } = useContext(Context);

  const fetchItem = async () => {
    const fetchItem = await axios(
      `https://api.themoviedb.org/3${match.url}?${apiKey}&append_to_response=${
        append[type]
      }`
    );
    dispatch({ type: 'SET_PAGE_DATA', payload: fetchItem.data });
  };

  useEffect(() => {
    fetchItem();
    return () => {
      // console.log('profile unmount');
      dispatch({ type: 'SET_PAGE_DATA_UNMOUNT' });
    };
  }, [match.url]);

  const append = {
    movie:
      'credits,external_ids,videos,recommendations,reviews,images,keywords',
    tv: 'credits,external_ids,videos,recommendations,reviews,keywords,',
    person: 'movie_credits,tv_credits,external_ids,combined_credits'
  };

  return (
    <>
      {Object.keys(pageData).length === 0 ? (
        <Spinner />
      ) : (
        <div style={backcolor} className='h-100 min-vh-100'>
          <div
            style={backdropPoster(
              `url(https://image.tmdb.org/t/p/original${
                pageData.backdrop_path
              })`
            )}
            className='bg-image p-1 pb-4'
          >
            <div className='container'>
              <div className='row'>
                <ImgProfile
                  data={pageData.profile_path || pageData.poster_path}
                />
                <TextProfile
                  dispatch={dispatch}
                  type={type}
                  data={pageData}
                  back={history.goBack}
                />
              </div>
            </div>
          </div>
          <div className='row px-3'>
            <div className='col-12 col-md-8 mx-auto'>
              {type === 'person' ? (
                <>
                  <KnowFor
                    data={pageData.combined_credits.cast}
                    dispatch={dispatch}
                  />
                  <AllCredits
                    data={pageData.combined_credits}
                    tv={pageData.tv_credits}
                    movie={pageData.movie_credits}
                  />
                </>
              ) : (
                <Cast data={pageData.credits.cast} dispatch={dispatch} />
              )}
              {type === 'tv' && (
                <Seasons
                  status={pageData.status}
                  currentSeason={pageData.seasons.pop()}
                />
              )}
              {type !== 'person' && (
                <>
                  <TrailerCard data={pageData.videos.results} />
                  <ReviewsCard
                    data={pageData.reviews && pageData.reviews.results}
                  />
                  <Recommendations
                    data={pageData.recommendations.results}
                    type={type}
                    dispatch={dispatch}
                  />
                </>
              )}
            </div>
            <div
              style={{ backgroundColor: '#F1F1F1' }}
              className={`col-12 col-md-3 ${type === 'person' &&
                'order-first'}`}
            >
              <FactsProfile data={pageData} type={type} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

const backdropPoster = url => ({
  backgroundImage: url,
  backgroundSize: 'cover',
  objectFit: 'cover'
});

const backcolor = {
  backgroundColor: ' #e2e2e2',
  backgroundImage:
    'linear-gradient(181deg, #e2e2e2 0%, #ffffff 50%, #ffffff 100%)'
};
