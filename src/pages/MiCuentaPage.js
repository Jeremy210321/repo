import React from 'react';
import {Row, Col, Form, Input, Button,Upload} from "antd";
import "../styles/App.css"
import "../styles/MiCuenta.css"
import { UploadOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

function MiCuentaPage(props) {
    const handleLogOut = () =>{
        <Link to="/" />;
    };
    const user = [{
        names: " Jeremy León",
        email: "jeremy.leon@gmail.com"
    }

    ]
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };
    return (
        <Row className="count-container">
            <Col span={12} className="col-load">
                <Form>
                    <Form.Item
                        name="load"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="Agrega tu foto de perfil"
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Actualizar foto de perfil</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Col>

            <Col>
                <Form
                >
                    <Form.Item
                        name="names"
                        label="Nombres y Apellidos"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message:
                                    "Por favor ingresa tu nombre y apellido",
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Correo electrónico"
                        rules={[
                            {
                                type: 'email',
                                message: "El contenido del campo debe ser un correo electrónico",
                            },
                            {
                                required: true,
                                message: 'Por favor ingresa tu correo electrónico',
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>

                    <Form.Item
                        name="Direction"
                        label="Dirección"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message:
                                    "Por favor ingresa una dirección",
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        label="Nombre de usuario"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message:
                                    "Por favor ingresa un nombre de usuario",
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>

                    <Form.Item
                        name="Telephone"
                        label="Número de teléfono"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message:
                                    "Por favor ingresa un número de teléfono",
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>

                    <Form.Item {...tailLayout} className="count-buttons">
                        <Button  htmlType="submit" className="secondary-button" onClick={handleLogOut()}>
                            Cerrar Sesión
                        </Button>
                        <Button  htmlType="submit" className="primary-button" >
                            Guardar
                        </Button>

                    </Form.Item>
                </Form>
            </Col>


        </Row>
    );
}

export default MiCuentaPage;