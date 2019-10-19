import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

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
          <Link className="btn btn-primary btn-cta" to="/posts/new">
            Upload photo
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts, currentUser: state.currentUser };
 } 

export default connect(mapStateToProps)(PostsList);
