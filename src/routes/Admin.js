import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// Components
import Layout from "../components/UI/Layout/Layout";
import Input from "../components/UI/Input";
import AdminPage from "../components/AdminPage";
class Admin extends Component {
  render() {
    const urlParameters = new URLSearchParams(window.location.search);
    const value = urlParameters.get("value");

    return (
      <div>
        <Layout selected="adminPage">
          <Input disabled={true} value={value} placeholder="Query Value" />
          <AdminPage />
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    email: state
  };
};
export default connect(mapStateToProps)(withRouter(Admin));
