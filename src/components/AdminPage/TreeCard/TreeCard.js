import React from "react";
import PropTypes from "prop-types";

// Components
import { Row, Col } from "antd";
import Tree from "../../UI/Tree";

// CSS
import "./TreeCard.css";

class TreeCard extends React.Component {
  static propTypes = {
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired
          })
        )
      })
    )
  };

  static defaultProps = {
    nodes: []
  };

  render() {
    return (
      <div className="TreeCard">
        <div className="Title"> Giriş yapıldı.</div>
        <Row>
          <Col xs={24}>
            <Col xs={24}>
              <Tree nodes={this.props.nodes} />
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TreeCard;
