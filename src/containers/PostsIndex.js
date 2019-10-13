import React, { Component } from 'react';

class PostsIndex extends Component {
  renderPosts() {
  // TODO
  }

 render() {
  return (
    <div>
      <div>
        <h3>Blog</h3>
        Let's write a post!
      </div>
      {this.renderPosts()}
    </div>
  );
 }
}

export default PostsIndex;
