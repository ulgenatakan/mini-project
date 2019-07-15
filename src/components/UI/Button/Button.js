import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

class ButtonComp extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    action: PropTypes.func.isRequired,
    loading: PropTypes.bool
  };

  static defaultProps = {
    placeholder: "BUTON",
    loading: false
  };

  render() {
    return (
      <div className="Button">
        <Button loading={this.props.loading} onClick={this.props.action}>
          {this.props.placeholder}
        </Button>
      </div>
    );
  }
}

export default ButtonComp;
