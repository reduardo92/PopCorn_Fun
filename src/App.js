import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Provider from './componets/Provider';
import CustomNavbar from './componets/layout/navbar/CustomNavbar';
import Footer from './componets/layout/footer/Footer';

import Spinner from './componets/common/spinner';
// Lazy Loads Components
const SearchInput = lazy(() => import('./componets/layout/search/SearchHome'));
const MovieHome = lazy(() => import('./componets/layout/home/MovieHome'));
const TvHome = lazy(() => import('./componets/layout/tv/TvHome'));
const PeopleHome = lazy(() => import('./componets/layout/people/PeopleHome'));
const Profile = lazy(() => import('./componets/layout/profilePage/Profile'));

const App = () => (
  <Provider>
    <BrowserRouter>
      <>
        <CustomNavbar />
        <Suspense fallback={<Spinner />}>
          <SearchInput />
          <div style={gradient} className='min-vh-100'>
            <Switch>
              <Route path='/:type/:id' exact component={Profile} />
              <Route path='/person' exact component={PeopleHome} />
              <Route path='/tv' exact component={TvHome} />
              <Route path='/movie' exact component={MovieHome} />
              <Redirect from='/' exact to='/movie' />
            </Switch>
          </div>
        </Suspense>
        <Footer />
      </>
    </BrowserRouter>
  </Provider>
);

const gradient = {
  backgroundColor: '#ffffff',
  backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #dcdcdc 64%)'
};

export default App;
