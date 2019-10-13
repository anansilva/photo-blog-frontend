import React, { Component } from 'react';
import { connect } from 'react-redux';
import './posts.scss';

export class PostsList extends Component {
  renderPosts() {
    if (!this.props.posts || this.props.posts.length === 0) {
      return 'No Photos';
    } else {
      return this.props.posts.map((post) => {
        return (
          <div className="post-item" key={post.id}>
            {post.photo}
          </div> 
        );
      });
    }
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
