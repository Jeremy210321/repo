import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "../styles/MainMenu.css"
import "../styles/App.css"

const MainMenu = () => {
  return (
    <Menu
        theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      className="main-menu"
    >
      <Menu.Item className="main-button">
        <Link to="/">Inicio</Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/maneja-tus-desechos">Maneja tus desechos</Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/contactenos" className="item">Contáctenos</Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/videos">Videos</Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/noticias">Noticias</Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/gestionar">Gestionar</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
