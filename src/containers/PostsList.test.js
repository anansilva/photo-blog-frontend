import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { PostsList } from './PostsList';
import configureStore from 'redux-mock-store';

describe('Rendering the app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('Connected React-Redux PostsList', () => {
  let container;

  it('renders welcome message', () => {
    container = shallow(<PostsList />);   
    const welcome = <div><h3>Blog</h3>Let's write a post!</div>;

    expect(container.contains(welcome)).toEqual(true);
  });
  
  it('renders posts when there are posts', () => {
    const posts = [{id: 1, photo: 'photo.jpg'}, {id: 2, photo: 'ruby.png'}]

    container = shallow(<PostsList posts={posts} />);

    expect(container).toMatchSnapshot();
    expect(container.contains('No Photos')).toEqual(false);

  });
  
  it('renders "no photos" when there are no posts', () => {
    const container = shallow(<PostsList />);
    const noPostsMessage = 'No Photos';
    
    expect(container.contains(noPostsMessage)).toEqual(true);
  });
});
