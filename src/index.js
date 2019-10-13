import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import PostsList from './containers/PostsList';

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
    <PostsList />
  </Provider>,
  document.getElementById('root')
 );
