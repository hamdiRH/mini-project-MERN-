import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>

        <NavLink href='#'>
          <i className="fas fa-bell mr-4" style={{ color: '#dc006c', fontSize: '30px', opacity: '.7' }}></i>
          <i className="fas fa-bars mr-4" style={{ color: '#dc006c', fontSize: '30px' }} ></i>
          <i onClick={this.props.logout} className="fas fa-sign-out-alt  mr-2" style={{ color: '#dc006c', fontSize: '30px' }} />

        </NavLink>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
