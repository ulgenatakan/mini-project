import React from "react";
import PropTypes from "prop-types";
import { DatePicker } from "antd";
import "moment/locale/tr";

class DatePickerComp extends React.Component {
  static propTypes = {
    value: PropTypes.object,
    placeholder: PropTypes.string,
    changeFunction: PropTypes.func.isRequired
  };

  static defaultProps = {
    placeholder: "Tarih"
  };

  render() {
    const dateFormat = "YYYY/MM/DD";

    return (
      <div className="DatePicker">
        <DatePicker
          size="large"
          value={this.props.value}
          style={{ width: "100%" }}
          format={dateFormat}
          autoFocus={true}
          placeholder={this.props.placeholder}
          onChange={this.props.changeFunction}
        />
      </div>
    );
  }
}

export default DatePickerComp;
