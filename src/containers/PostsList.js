import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { config } from '../constants';

export class PostsList extends Component {
  componentDidMount() {
    if (this.props.currentUser && this.props.currentUser.token) {
      this.props.dispatch(fetchPosts(this.props.currentUser.token));
    } else {
      this.props.history.push('/auth/login');
    }
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div className="post-item text-center" key={post.id}>
          <img className="img-thumbnail item" src={`${config.url.BASE_URL}`+ post.photo_thumbnail_url} alt={post.description} />
        </div> 
      );
    });
  }

  render() {
    if (this.props.posts.length > 0) {
      return (
        <div className="post-list">
          {this.renderPosts()}
        </div>
      );
    } else if (this.props.dispatch && this.props.posts.length === 0) {
      return (
        <p>No Photos yet!</p>
      )
    }
  }
}

function mapStateToProps(state) {
  return {posts: state.posts, currentUser: state.currentUser };
 } 

export default connect(mapStateToProps)(PostsList);
