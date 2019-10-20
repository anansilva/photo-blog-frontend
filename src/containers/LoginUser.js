import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { requestUserLogin } from '../actions/index';
import { Link } from 'react-router-dom';

class LoginUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      email: '',
      password: '',
    }
  }

  componentDidUpdate() {
    if (this.props.currentUser && this.props.currentUser.token) {
      this.props.history.push('/posts');
    }
  }

  clearFields = () => {
    this.setState({email: '', password: '', password_confirmation: ''});
  }

  handleFields = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const request = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    };

    this.props.requestUserLogin(request);
    this.clearFields();
  }

  signUpMesage = () => {
    return (
      <div className="d-flex justify-content-start my-2">
        <p className="mr-2">Don't have an account yet?</p>
        <Link to="/auth/signup">Sign up here</Link>
      </div>
    )
  }

  render() {
    return (
      <div className="p-20">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input name="email"
                   id="email"
                   type="email"
                   className="form-control"
                   onChange={this.handleFields} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input name="password"
                   id="password"
                   type="password"
                   className="form-control"
                   onChange={this.handleFields} />
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
        {this.signUpMesage()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

 function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestUserLogin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);