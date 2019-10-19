import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { requestUserLogin } from '../actions/index';

class LoginUser extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {"user": {"email": email, "password": password}};
    this.props.requestUserLogin(request);
  }      

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input name="email" id="email" type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input name="password" id="password" type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    );
  }
}

 function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestUserLogin }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginUser);