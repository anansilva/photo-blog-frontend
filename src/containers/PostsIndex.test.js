import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PostsIndex from './PostsIndex.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostsIndex />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  const wrapper = shallow(<PostsIndex />);
  const welcome = <div><h3>Blog</h3>Let's write a post!</div>;
  expect(wrapper.contains(welcome)).toEqual(true);
});