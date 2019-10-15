import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

import './posts.scss';

export class PostsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  // componentDidUpdate(prevProps, nextProps) {
  //   if (prevProps.posts !== nextProps.props) {
  //     this.props.dispatch(fetchPosts());
  //   }
  // }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div className="post-item" key={post.id}>
          <img src={"http://localhost:3000"+post.photo_thumbnail_url} alt={post.description} />
        </div> 
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog</h3>
          Upload photo
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
 } 

export default connect(mapStateToProps)(PostsList);
