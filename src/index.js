import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import {IntlProvider} from 'react-intl';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import routes from './routes';
import reducers from './reducers';

const middleware = applyMiddleware(thunk,promise(),logger())
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <Router routes={routes} history={hashHistory} />
    </IntlProvider>
  </Provider>
  , document.getElementById('root')
);
