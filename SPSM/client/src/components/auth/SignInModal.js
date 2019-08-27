import React, { Component } from "react";
import { Modal, NavLink, Alert } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
// import { Redirect } from 'react-router-dom'
import "./SignUpModal.css";

class LoginModal extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    Pemail: "",
    Ppassword: "",
    msg: null,
    rSelected: 1,
    SU: "active-sx formm",
    SI: "inactive-dx formm"
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
      user: 1
    };
    // Attempt to login
    this.props.login(user);
  };

  onSubmit2 = e => {
    e.preventDefault();
    const { Pemail, Ppassword } = this.state;
    const user = {
      email: Pemail,
      password: Ppassword,
      user: 2
    };
    // Attempt to login
    this.props.login(user);
  };

  render() {
    return (
      <div>
        <NavLink
          onClick={this.toggle}
          href="#"
          className="Athbtn"
          style={{ borderRadius: "30px" }}
        >
          Sign In
        </NavLink>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          style={{ marginTop: "20%" }}
        >
          <div className="container-auth">
            <form className={this.state.SU} onSubmit={this.onSubmit}>
              <h3 className="h3auth">Sign In</h3>
              <p className="pp">Student</p>
              {this.state.msg ? (
                <Alert color="danger">{this.state.msg}</Alert>
              ) : null}
              <img
                src="https://mslu.ch/sites/default/files/inline-images/male-user_0.png"
                style={{
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                  border: "2px solid black"
                }}
                alt="user"
              />
              <input
                className="w100 authinput mt-5"
                type="email"
                name="email"
                onChange={this.onChange}
                placeholder="Insert Email"
              />
              <input
                className="authinput mb-5"
                type="password"
                name="password"
                onChange={this.onChange}
                placeholder="Insert Password"
              />

              <br />
              <br />
              <br />

              <button
                className="authbutton form-btn sx log-in mt-5"
                type="button"
                onClick={() => {
                  this.setState({
                    SU: "inactive-sx formm",
                    SI: "active-dx formm"
                  });
                }}
              >
                Instructor
              </button>
              <button className="form-btn dx authbutton mt-5" type="submit">
                Sign In
              </button>
            </form>
            <form className={this.state.SI} onSubmit={this.onSubmit2}>
              <h3 className="h3auth">Sign In</h3>
              <p className="pp">Instructor</p>
              {this.state.msg ? (
                <Alert color="danger">{this.state.msg}</Alert>
              ) : null}
              <img
                src="https://static05.cminds.com/wp-content/uploads/computer-1331579_1280-1-300x300.png"
                style={{ borderRadius: "50%", width: "150px", height: "150px" }}
                alt="user"
              />
              <input
                className="w100 authinput mt-5"
                type="email"
                name="Pemail"
                onChange={this.onChange}
                placeholder="Insert Email"
              />
              <input
                className="authinput mb-5"
                type="password"
                name="Ppassword"
                onChange={this.onChange}
                placeholder="Insert Password"
              />

              <br />
              <br />
              <br />

              <button
                className="authbutton form-btn sx back mt-5"
                type="button"
                onClick={() => {
                  this.setState({
                    SU: "active-sx formm",
                    SI: "inactive-dx formm"
                  });
                }}
              >
                Student
              </button>
              <button className="authbutton form-btn dx mt-5" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,

  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(LoginModal);
