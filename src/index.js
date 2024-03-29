import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import * as serviceWorker from './serviceWorker';
// Import your reducers and routes here
import movie from './reducers/movie/';
import create from './reducers/movie/create'
import movieRoutes from './routes/movie';

import Welcome from './Welcome';
import List from './components/movie/List';
import Create from './components/movie/Create';

const history = createBrowserHistory();
export const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    movie,
    create
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Welcome} strict={true} exact={true}/>
        <Route path="/movies" component={List} strict={true} exact={true}/>
        <Route path="/create" component={Create} strict={true} exact={true}/>
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
