import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

// internal modules
import PostsList from './containers/PostsList';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss'

// reducers
import postsReducer from './reducers/posts_reducer';

// State and reducers
const reducers = combineReducers({
 posts: postsReducer
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

const middlewares = applyMiddleware(thunk, logger);

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
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
