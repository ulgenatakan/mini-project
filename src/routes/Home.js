import React, { Component } from "react";

// Components
import Layout from "../components/UI/Layout";
import HomePage from "../components/HomePage";

class Home extends Component {
  render() {
    return (
      <div>
        <Layout selected="mainPage">
          <HomePage />
        </Layout>
      </div>
    );
  }
}
export default Home;
