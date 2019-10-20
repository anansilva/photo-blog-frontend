import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  toggleLogout = () => {
    if (this.props.currentUser && this.props.currentUser.token) {
      return (
        <li className="nav-item"><NavLink exact className="nav-link" to="/logout">Log Out</NavLink></li>
      )
    }
  }

  toggleUploadPhoto = () => {
    if (this.props.currentUser && this.props.currentUser.token) {
      return (
        <li className="nav-item"><NavLink exact className="nav-link" to="/posts/new">Upload photo</NavLink></li>
      )
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Photo Blog</NavLink></li>
          {this.toggleLogout()}
          {this.toggleUploadPhoto()}
         </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(Navbar);