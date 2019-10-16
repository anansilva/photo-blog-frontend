import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: {}
    }
  }

  handleFileUpload = (e) => {
    this.setState({ file: e.target.files[0]});
  }

  submitPost = () => {
    this.props.createPost(this.state.file);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitPost}>
          <input
            type='file'
            onChange={this.handleFileUpload}
          />
          <button className="btn btn-primary" type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsNew);