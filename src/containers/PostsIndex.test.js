import React from 'react';
import ReactDOM from 'react-dom';
import PostsIndex from './PostsIndex.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostsIndex />, div);
  ReactDOM.unmountComponentAtNode(div);
});
