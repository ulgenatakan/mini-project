import React from "react";
import PropTypes from "prop-types";

// Components
import Header from "./Header";
import Footer from "./Footer";

// CSS
import "./Layout.css";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    selected: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="Layout">
        <Header selected={this.props.selected} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
