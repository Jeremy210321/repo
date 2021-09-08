import React from 'react';
import {Button, Col, Row} from "antd";
import { Link } from "react-router-dom";
import "../styles/App.css"
function MainLogo(props) {
    return (
        <Row className="main-logo">
            <Col span={3}><img src="../images/titulo.png" className="title-image"
                               alt="title"></img></Col>
            <Col span={12}></Col>
            <Col span={6}><Button className="count-button" ><Link to="/mi-cuenta">Mi cuenta</Link></Button><img
                src="../images/logo.png"
                alt="logo"
                className="logo-image"/></Col>
        </Row>
    );
}

export default MainLogo;