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
        <div className="post-item" key={post.id}>
          <img src={`${config.url.BASE_URL}`+ post.photo_thumbnail_url} alt={post.description} />
        </div> 
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts, currentUser: state.currentUser };
 } 

export default connect(mapStateToProps)(PostsList);
