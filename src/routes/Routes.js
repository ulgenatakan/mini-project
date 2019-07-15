import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Import Routes
import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";

// Redux
import ACTIONS from "../action";

class Routes extends Component {
  // Logout Handler
  parameterHandler = value => {
    // Remove from Redux
    this.props.createQuery(value);
  };

  render() {
    const urlParameters = new URLSearchParams(window.location.search);
    const value = urlParameters.get("value");

    // If User not Logged In Save Query to Redux
    if (this.props.email && this.props.email.items.length > 0) {
      this.parameterHandler(value);
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/login" exact component={Login} />
          <Route
            path="/admin"
            exact
            render={() =>
              this.props.email && this.props.email.items.length > 0 ? (
                <Admin />
              ) : (
                <Redirect
                  to={{ pathname: "/admin/login", state: { query: value } }}
                />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    email: state
  };
};
const mapDispatchToProps = dispatch => ({
  createQuery: query => dispatch(ACTIONS.createQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
