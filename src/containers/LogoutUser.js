import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { cleanCurrentUser } from '../actions/index';
import { Redirect } from 'react-router-dom';

class LogoutUser extends Component {
  componentDidMount() {
    this.props.cleanCurrentUser();
  }

  render() {
    return <Redirect to="/auth/login" />
  }
}

 function mapDispatchToProps(dispatch) {
  return bindActionCreators({ cleanCurrentUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(LogoutUser);