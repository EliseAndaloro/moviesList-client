import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/movie/';

export default [
  <Route path="/movies/create" component={Create} exact key="create" />,
  <Route path="/movies/edit/:id" component={Update} exact key="update" />,
  <Route path="/movies/show/:id" component={Show} exact key="show" />,
  <Route path="/movies/" component={List} exact strict key="list" />,
  <Route path="/movies/:page" component={List} exact strict key="page" />
];
