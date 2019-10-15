import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

class PostsNew extends Component {
  onSubmit = (values) => {
    //TODO
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <label htmlFor="Title">Title</label>
          <Field
            className="form-control"
            label="Title"
            name="title"
            type="text"
            component="input"
          />
          <label htmlFor="content">Content</label>
          <Field
            className="form-control"
            label="Photo"
            name="photo"
            component="input"
            type="file"
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'newPostForm' })(
  connect(null, { })(PostsNew)
);
