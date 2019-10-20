import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  toggleNavItems = () => {
    if (this.props.currentUser && this.props.currentUser.token) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item"><NavLink exact className="nav-link" to="/posts/new">Upload photo</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" to="/auth/logout">Log Out</NavLink></li>
        </ul>
      )
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Photo Blog</NavLink></li>
         </ul>
          {this.toggleNavItems()}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(Navbar);