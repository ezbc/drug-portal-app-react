import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';

export default (
  <Route>
    <Route exact path='/' component={App}/>
  </Route>
);
