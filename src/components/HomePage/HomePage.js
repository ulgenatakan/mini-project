import React, { Component } from "react";
import validate from "validate.js";

// Components
import { Form, Alert } from "antd";
import FormCard from "./FormCard";
import ModalCard from "./ModalCard";

// CSS
import "./HomePage.css";

class HomePage extends Component {
  state = {
    checkbox: false,
    input: "",
    datepicker: null,
    loading: false
  };

  // Input Change Handler
  inputChangeHandler = (key, value) => {
    const currentState = { ...this.state };
    currentState[key] = value;
    this.setState({ ...currentState });
  };

  // Submit Handler
  submitHandler = () => {
    // Validate Input Component
    if (validate.isEmpty(this.state.input) || this.state.input.length < 2) {
      this.setState({
        error: {
          type: "input",
          message: "Lütfen Ad Soyad bilgisini giriniz."
        },
        confirm: null
      });
      return;
    }

    // Validate DatePicker Component
    if (validate.isEmpty(this.state.datepicker)) {
      this.setState({
        error: {
          type: "input",
          message: "Lütfen geçerli bir tarih giriniz."
        },
        confirm: null
      });
      return;
    }

    // Validate Checkbox Component
    if (!this.state.checkbox) {
      this.setState({
        error: {
          type: "checkbox",
          message: "Lütfen herşey tamam kutucuğunu işaretleyiniz. "
        },
        confirm: null
      });
      return;
    }
    this.setState({
      confirm: {
        status: "CONFIRMED",
        message: "Form Başarıyla Gönderildi."
      },
      error: null
    });
    this.handleReset();
  };

  // Clear Form
  handleReset = () => {
    this.setState({
      checkbox: false,
      datepicker: null,
      input: ""
    });
  };
  render() {
    return (
      <div className="HomePage">
        <Form>
          {this.state.error ? (
            <Alert
              message="Hatalı veya Eksik Giriş"
              description={this.state.error.message}
              type="error"
            />
          ) : null}
          {this.state.confirm && this.state.confirm.status === "CONFIRMED" ? (
            <Alert
              message="Başarılı Giriş"
              description={this.state.confirm.message}
              type="success"
            />
          ) : null}
          <FormCard
            checkbox={this.state.checkbox}
            input={this.state.input}
            datepicker={this.state.datepicker}
            changeFunction={this.inputChangeHandler}
            loading={this.state.loading}
            submitFunction={this.submitHandler}
          />
          <ModalCard />
        </Form>
      </div>
    );
  }
}
export default HomePage;
