import React from "react";
import PropTypes from "prop-types";

// Components
import { Row, Col, Input } from "antd";
import Button from "../../UI/Button";
import InputComp from "../../UI/Input";

// CSS
import "./LoginCard.css";

class LoginCard extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeFunction: PropTypes.func.isRequired,
    loginFunction: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="LoginCard">
        <div className="Title"> Admin Girişi</div>
        <Row>
          <Col xs={24}>
            <Col xs={24}>
              <div className="InputBoxText"> E Mail</div>
            </Col>

            <div className="InputBox">
              <InputComp
                value={this.props.email}
                placeholder="E-Mail Bilgisi"
                changeFunction={e =>
                  this.props.changeFunction("email", e.target.value)
                }
              />
            </div>
          </Col>

          <Col xs={24}>
            <Col xs={24}>
              <div className="InputBoxText"> Şifre</div>
            </Col>

            <div className="InputBox">
              <Input.Password
                placeholder="Şifre Bilgisi"
                size="large"
                onChange={e =>
                  this.props.changeFunction("password", e.target.value)
                }
              />
            </div>
          </Col>
          <Button action={this.props.loginFunction} placeholder="Giriş Yap" />
        </Row>
      </div>
    );
  }
}

export default LoginCard;
