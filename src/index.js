import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
// internal modules
import PostsList from './containers/PostsList';
import PostsNew from './containers/PostsNew';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

// reducers
import postsReducer from './reducers/posts_reducer';

// State and reducers
const reducers = combineReducers({
  posts: postsReducer
}); 

const middlewares = applyMiddleware(thunk, logger);


ReactDOM.render(
  <Provider store={createStore(reducers, middlewares)}>
     <Router>
      <div className="thin-container">
        <Switch>
          <Route path="/posts" exact component={PostsList} />
          <Route path="/posts/new" exact component={PostsNew} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
 );
