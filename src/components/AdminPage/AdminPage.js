import React, { Component } from "react";

// Components
import TreeCard from "./TreeCard";

// CSS
import "./AdminPage.css";

class Admin extends Component {
  static propTypes = {};

  state = {
    email: "",
    password: ""
  };

  render() {
    const nodes = [
      {
        name: "Ana Sayfa",
        items: [
          { name: "Ad Soyad" },
          { name: "Tarih Seçici" },
          { name: "Her Şey Tamam" },
          { name: "Modal'lar" }
        ]
      },
      {
        name: "Admin Sayfası",
        items: [
          { name: "Value Query Göstergesi" },
          { name: "Tree Component'ı" }
        ]
      },
      {
        name: "Admin Giriş Sayfası",
        items: [
          { name: "E mail validasyonu" },
          { name: "Password inputu" },
          { name: "Email Redux Store" }
        ]
      },
      { name: "Admin Çıkış Sayfasi", items: [{ name: "Çıkış Yap Butonu" }] }
    ];

    return (
      <div className="AdminPage">
        <div>
          <TreeCard nodes={nodes} />
        </div>
      </div>
    );
  }
}

export default Admin;
