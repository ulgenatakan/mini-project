import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import { Row, Col } from "antd";
import InputComp from "../../UI/Input";
import DatePickerComp from "../../UI/DatePicker";
import CheckboxComp from "../../UI/Checbox";
import ButtonComp from "../../UI/Button";

// CSS
import "./FormCard.css";

class FormCard extends Component {
  static propTypes = {
    checkbox: PropTypes.bool.isRequired,
    changeFunction: PropTypes.func.isRequired,
    submitFunction: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    datepicker: PropTypes.object, // eslint-disable-line
    loading: PropTypes.bool
  };

  static defaultProps = {
    loading: false
  };

  render() {
    return (
      <div className="FormCard">
        <div className="Title"> Form</div>
        <Row>
          <Col xs={24}>
            <Col xs={24}>
              <div className="InputBoxText"> Lütfen İsminizi Giriniz</div>
            </Col>

            <div className="InputBox">
              <InputComp
                value={this.props.input}
                placeholder="İsim"
                changeFunction={e =>
                  this.props.changeFunction("input", e.target.value)
                }
              />
            </div>
          </Col>

          <Col xs={24}>
            <Col xs={24}>
              <div className="InputBoxText"> Lütfen Tarih Seçiniz</div>
            </Col>
            <div className="InputBox">
              <DatePickerComp
                value={this.props.datepicker}
                changeFunction={e => this.props.changeFunction("datepicker", e)}
              />
            </div>
          </Col>

          <Col xs={24}>
            <Row>
              <div className="InputBoxText">
                <CheckboxComp
                  value={this.props.checkbox}
                  changeFunction={() =>
                    this.props.changeFunction("checkbox", !this.props.checkbox)
                  }
                />
              </div>
              <div className="CheckboxComp"> Her şey tamam mı?</div>
              <div className="Submit">
                <ButtonComp
                  action={this.props.submitFunction}
                  loading={this.props.loading}
                  placeholder="Gönder"
                />
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default FormCard;
