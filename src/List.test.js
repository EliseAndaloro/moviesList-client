import React from 'react';
import { render } from '@testing-library/react';
import List from './components/movie/List';
import { Provider } from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import { Switch } from 'react-router-dom';
import {store} from './index.js';

// __test__/configJSDom.js
import EventSource from 'eventsourcemock';

Object.defineProperty(window, 'EventSource', {
  value: EventSource,
});

test('renders first movie title', () => {
  const { getByText } = render(<Provider store={store}><ConnectedRouter history=""><Switch><List /></Switch></ConnectedRouter></Provider>);
  const strongElement = 'Movie List';
  expect(strongElement).toBeInTheDocument();
});
