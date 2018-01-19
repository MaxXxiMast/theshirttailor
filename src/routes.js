// REACT
import React from 'react';
import { render } from 'react-dom';
// REACT-ROUTER
//import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import loadable from 'loadable-components';
// END REACT- ROUTER


// RETRIVES COMPONENTS BASED ON STATUS
const Status = function ({ code, children }) {
  return (
    <Route render={function ({ staticContext }) {
      if (staticContext)
        staticContext.status = code
      return children
    }} />
  );
};
//NOT-FOUND COMPONENT
const NotFound = function () {
  return (
    <Status code={404}>
      <div>
        <h2> Sorry, cannot find this page</h2>
      </div>
    </Status>
  );
};

//Loadable Components
const Home = loadable(() => import('./components/pages/home' /* webpackChunkName: 'home' */));
const Cart = loadable(() => import('./components/pages/cart' /* webpackChunkName: 'cart' */));
const BooksForm = loadable(() => import('./components/pages/booksForm' /* webpackChunkName: 'bookForm' */));
const BooksList = loadable(() => import('./components/pages/booksList' /* webpackChunkName: 'bookList' */));

// CLIENT-SERVER SHARED ROUTES
const routes = (
  <div>
    <Header/>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/books" component={BooksList} />
      <Route path="/admin" component={BooksForm} />
      <Route path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

if (typeof require.ensure !== "function")
  require.ensure = (d, c) => {
    c(require);
  };
if (typeof require.include !== "function") require.include = () => {};

export default routes;