import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import useRelay from 'react-router-relay';
import { Router, hashHistory, applyRouterMiddleware } from 'react-router';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import {IntlProvider} from 'react-intl';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import routes from './routes';
import reducers from './reducers';

const middleware = applyMiddleware(thunk,promise(),logger())
// const store = createStore(reducers, middleware);

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:5000')
);

ReactDOM.render(
  /*<Provider store={store}>
    <IntlProvider locale="en">
      <Router 
        forceFetch
        routes={routes} 
        history={hashHistory}
        render={applyRouterMiddleware(useRelay)}
        environment={Relay.Store}/>
    </IntlProvider>
  </Provider>*/
  <Router 
        forceFetch
        routes={routes} 
        history={hashHistory}
        render={applyRouterMiddleware(useRelay)}
        environment={Relay.Store}/>
  , document.getElementById('root')
);
