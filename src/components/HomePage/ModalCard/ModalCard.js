import React from "react";

// Components
import { Modal, Row, Col } from "antd";
import Button from "../../UI/Button";
// CSS
import "./ModalCard.css";

class ModalCard extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    return (
      <div className="ModalCard">
        <div className="Title"> Modal</div>
        <Row>
          <Col xs={12}>
            <Button
              placeholder="Hata Mesajı Alıyorum"
              action={() => this.setModal1Visible(true)}
            />
            <Modal
              title="Eğer Hata Mesajı Alıyorsanız ..."
              style={{ top: 20 }}
              visible={this.state.modal1Visible}
              onOk={() => this.setModal1Visible(false)}
              onCancel={() => this.setModal1Visible(false)}
            >
              <p>
                Formu Doldurduktan hata mesajı alırsanız, bir yerlerde yanlış
                bilgi giriyorsunuz demektir. Lütfen hata mesajlarına göre formu
                düzeltip tekrar deneyiniz.
              </p>
            </Modal>
          </Col>
          <Col xs={12}>
            <Button
              placeholder="Daha Fazla Bilgi"
              action={() => this.setModal2Visible(true)}
            >
              Centered
            </Button>
            <Modal
              title="Formu doldurduktan sonra ..."
              centered
              visible={this.state.modal2Visible}
              onOk={() => this.setModal2Visible(false)}
              onCancel={() => this.setModal2Visible(false)}
            >
              <p>
                Formu Doldurduktan sonra gönder butonuna basarsanız, form
                gönderilir.{" "}
              </p>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ModalCard;
