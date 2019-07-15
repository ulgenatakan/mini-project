import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { Row, Col, Menu } from "antd";

// Components
import MenuItem from "antd/lib/menu/MenuItem";
import Link from "../../Link";

// CSS
import "./Header.css";

class Header extends React.Component {
  static propTypes = {
    selected: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="Header">
        <Row>
          <Col xs={24} sm={24}>
            <Menu
              mode="horizontal"
              theme="light"
              selectedKeys={[this.props.selected]}
            >
              <MenuItem key="mainPage">
                <Link title="Ana Sayfa" to="/">
                  Ana Sayfa
                </Link>
              </MenuItem>
              <MenuItem key="adminPage">
                <Link title="Admin Sayfası" to="/admin">
                  Admin Sayfası
                </Link>
              </MenuItem>
              <MenuItem key="adminLogin">
                {this.props.email.items && this.props.email.items.length > 0 ? (
                  <Link title="Admin Çıkışı" to="/admin/login">
                    Admin Çıkışı
                  </Link>
                ) : (
                  <Link title="Admin Girişi" to="/admin/login">
                    Admin Girişi
                  </Link>
                )}
              </MenuItem>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  email: state
});

export default connect(mapStateToProps)(Header);
