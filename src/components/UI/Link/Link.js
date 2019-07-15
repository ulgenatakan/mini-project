import React from "react";
import PropTypes from "prop-types";

class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    target: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object // eslint-disable-line
  };

  static defaultProps = {
    className: "",
    target: null,
    style: {}
  };

  render() {
    return (
      <a
        href={this.props.to}
        title={this.props.title}
        className={this.props.className}
        style={this.props.style}
        target={this.props.target}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Link;
