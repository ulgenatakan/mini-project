import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import validate from "validate.js";

// Components
import { Alert, Button } from "antd";
import LoginCard from "./LoginCard";

// CSS
import "./AdminLogin.css";

// Redux
import ACTIONS from "../../action";

class AdminLogin extends Component {
  static propTypes = {};

  state = {
    email: "",
    password: ""
  };

  // Input Change Handler
  inputChangeHandler = (key, value) => {
    const currentState = { ...this.state };
    currentState[key] = value;
    this.setState({ ...currentState });
  };

  // Login Handler
  loginHandler = () => {
    // Validate email
    if (
      validate.isEmpty(this.state.email) ||
      validate.single(this.state.email, {
        email: true
      })
    ) {
      this.setState({
        error: {
          type: "email",
          message: "Lütfen E-Mail Bilgisini giriniz."
        },
        confirm: null
      });
      return;
    }
    // Validate password
    if (validate.isEmpty(this.state.password)) {
      this.setState({
        error: {
          type: "password",
          message: "Lütfen şifrenizi giriniz."
        },
        confirm: null
      });
      return;
    }
    this.setState({
      confirm: {
        status: "CONFIRMED",
        message: "Admin girişi başarılı."
      },
      error: null
    });

    // Set to Redux
    this.props.userLogin(this.state.email);

    // Setting Query
    const adminQuery = this.props.location.state.query
      ? `/admin?value=${this.props.location.state.query}`
      : "/admin";

    setTimeout(function() {
      window.location = adminQuery;
    }, 1500);

    //Redirect
    setTimeout(function() {}, 1500);
  };

  // Logout Handler
  logoutHandler = () => {
    // Remove from Redux
    this.props.userLogout(this.props.email);
    window.location = "/";
  };

  render() {
    return (
      <div className="AdminPage">
        <div>
          {this.state.error ? (
            <Alert
              message="Hatalı veya Eksik Giriş"
              description={this.state.error.message}
              type="error"
            />
          ) : null}
          {this.state.confirm && this.state.confirm.status === "CONFIRMED" ? (
            <Alert
              message="Başarılı Giriş"
              description={this.state.confirm.message}
              type="success"
            />
          ) : null}
          {this.props.email.items && this.props.email.items.length > 0 ? (
            <div>
              <Button onClick={this.logoutHandler}>Çıkış Yap</Button>
            </div>
          ) : (
            <LoginCard
              email={this.state.email}
              password={this.state.password}
              changeFunction={this.inputChangeHandler}
              loginFunction={this.loginHandler}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state
});

const mapDispatchToProps = dispatch => ({
  userLogin: user => dispatch(ACTIONS.userLogin(user)),
  userLogout: user => dispatch(ACTIONS.userLogout(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminLogin));
