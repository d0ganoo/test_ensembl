import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './assets/css/reset.css';
import './assets/css/app.css';
import PageNotFound from './components/pageNotFound';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './containers/homePage';
import SeriesPage from './containers/seriesPage';
import MoviesPage from './containers/moviesPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
      <BrowserRouter>
      <Header />
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/series" component={SeriesPage} exact />
            <Route path="/movies" component={MoviesPage} exact />
            <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
