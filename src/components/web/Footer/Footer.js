import React from 'react'
import './Footer.scss';
import { Layout, Row, Col} from 'antd';
import MyInfo from './MyInfo'

export default function Footer() {
    const {Footer} = Layout;
    return (
        <Footer className="footer">
             <Col lg={4}/>
             <Col lg={16}>
                <Row>
                    <Col md={8}>
                        <MyInfo/>
                    </Col>
                    <Col md={8}>Navegación </Col>
                    <Col md={8}>Newslater</Col>
                </Row>
                <Row className="footer__copyright">
                    <Col md={12}>2020 Todos los derechos reservados</Col>
                    <Col md={12}>Cituk Caamal, Web Developer</Col>                   
                </Row>
            </Col>
            <Col lg={4}/>
        </Footer>
    )
}
