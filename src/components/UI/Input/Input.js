import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

class InputComp extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    changeFunction: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    placeholder: "BURALARA YAZ GUNU KAR YAGIYOR",
    disabled: false
  };

  render() {
    return (
      <div className="Input">
        <Input
          disabled={this.props.disabled}
          value={this.props.value}
          size="large"
          placeholder={this.props.placeholder}
          onChange={this.props.changeFunction}
        />
      </div>
    );
  }
}

export default InputComp;
