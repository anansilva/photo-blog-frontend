import React, { Component } from 'react';
import { connect } from 'react-redux';
import { config } from '../constants';

class PostsNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      file: {}
    }
  }

  createPost = (file, currentUser) => {
    const formData = new FormData();
    formData.append("post[photo]", file);
  
    fetch(`${config.url.API_URL}/posts`, {
      method: 'POST',
      body: formData,
      headers: { 'TOKEN': currentUser.token }
    })
      .then(response => response.json())
      .catch(error => this.setState({error: error})
    );
  }

  componentDidMount() {
    if (!(this.props.currentUser && this.props.currentUser.token)) {
      this.props.history.push('/auth/login');
    }
  }

  handleFileUpload = (e) => {
    this.setState({ file: e.target.files[0]});
  }

  redirectUser = () => {
    if (this.state.error || this.state.file === {}) {
      this.props.history.push('/posts/new');
      alert(this.state.error);
    } else {
      this.props.history.push('/posts');
    }
  }

  submitPost = () => {
    this.createPost(this.state.file, this.props.currentUser);
    this.redirectUser();
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

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(PostsNew);