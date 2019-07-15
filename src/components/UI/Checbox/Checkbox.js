import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";

class CheckboxComp extends React.Component {
  static propTypes = {
    value: PropTypes.bool.isRequired,
    changeFunction: PropTypes.func.isRequired
  };

  static defaultProps = {
    placeholder: "BURALARA YAZ GUNU KAR YAGIYOR"
  };

  render() {
    return (
      <div className="Checkbox">
        <Checkbox
          checked={this.props.value}
          onChange={this.props.changeFunction}
        />
      </div>
    );
  }
}

export default CheckboxComp;
