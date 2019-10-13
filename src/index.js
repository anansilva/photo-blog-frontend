import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PostsList from './containers/PostsList';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss'

const reducers = combineReducers({
 posts: (state = [], action) => state // TODO: implement postsReducer
}); 

const initialState = {
  posts: [
    {
      id: 1,
      photo: 'photo.jpg'
    },
    {
      id: 2,
      photo: 'rails.png'
    }
  ]
};

const middlewares = applyMiddleware(logger);

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
     <Router>
      <div className="thin-container">
      <Switch>
        <Route path="/" exact component={PostsList} />
      </Switch>
      </div>
    </Router> 
  </Provider>,
  document.getElementById('root')
 );
