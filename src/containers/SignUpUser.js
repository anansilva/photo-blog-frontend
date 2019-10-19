import React, { Component } from 'react';
import { config } from '../constants';

class SignUpUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  createUser = (request) => {
    const formData = new FormData();
    
    formData.append("user[email]", request.user.email);
    formData.append("user[password]", request.user.password);
    formData.append("user[password_confirmation]", request.user.password_confirmation);
    
    fetch(`${config.url.API_URL}/users`, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .catch(error => this.setState({error: error}));
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
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
      }
    };

    this.createUser(request);
    this.clearFields();
    this.redirectUser();
  }

  redirectUser = () => {
    if (this.state.error) {
      this.props.history.push('/signup');
      alert(this.state.error);
    } else {
      this.props.history.push('/auth/login');
    }
  }
  
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
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
          <div className="form-group">
            <label htmlFor="password">Confirm Password:</label>
            <input name="passwordConfirmation"
                   id="passwordConfirmation"
                  type="password"
                  className="form-control"
                  onChange={this.handleFields} />
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUpUser;