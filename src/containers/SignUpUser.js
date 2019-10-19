import React, { Component } from 'react';

function createUser(request) {
  const formData = new FormData();
  
  formData.append("user[email]", request.user.email);
  formData.append("user[password]", request.user.password);
  formData.append("user[password_confirmation]", request.user.password_confirmation);
  
  fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .catch(error => console.log(error)
  );
}

class SignUpUser extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password_confirmation = document.getElementById('confirm-password').value;
    const request = {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    };
    createUser(request);
  }
  
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input name="email" id="email" type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input name="password" id="password" type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password:</label>
            <input name="confirm-password" id="confirm-password" type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUpUser;