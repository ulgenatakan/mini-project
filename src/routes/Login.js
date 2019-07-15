import React, { Component } from "react";

// Components
import Layout from "../components/UI/Layout/Layout";
import AdminLogin from "../components/AdminLogin";

class Login extends Component {
  render() {
    return (
      <div>
        <Layout selected="adminLogin">
          <AdminLogin />
        </Layout>
      </div>
    );
  }
}
export default Login;
