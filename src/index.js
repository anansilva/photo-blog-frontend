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
import LoginUser from './containers/LoginUser';
import SignUpUser from './containers/SignUpUser';
import LogoutUser from './containers/LogoutUser';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/application.scss';

// reducers
import postsReducer from './reducers/posts_reducer';
import currentUserReducer from './reducers/current_user_reducer';

// State and reducers
const reducers = combineReducers({
  posts: postsReducer,
  currentUser: currentUserReducer
}); 

const middlewares = applyMiddleware(thunk, logger);


ReactDOM.render(
  <Provider store={createStore(reducers, middlewares)}>
     <Router>
      <div className="thin-container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={PostsList} />
          <Route path="/posts" exact component={PostsList} />
          <Route path="/posts/new" exact component={PostsNew} />
          <Route path="/auth/login" exact component={LoginUser} />
          <Route path="/auth/signup" exact component={SignUpUser} />
          <Route path="/auth/logout" exact component={LogoutUser} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
 );
