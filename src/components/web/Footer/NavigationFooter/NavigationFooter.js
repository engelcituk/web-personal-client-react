import React from 'react'
import './NavigationFooter.scss';
import { Row, Col, Icon} from 'antd';
import {Link} from 'react-router-dom';


export default function NavigationFooter() {
    return (
        <Row className="navigation-footer">
            <Col>
            <h3>NAvebacion</h3>
            </Col>
            <Col md={12}>
                <RenderListLeft/>
            </Col>
            <Col md={12}>
                <RenderListRight/>
            </Col>
        </Row>
    )
}

function RenderListLeft(){
    return (
        <ul>
            <li>
                <a href="#">
                    <Icon type="book"/> Cursos online
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <Icon type="code"/> Desarrollo web
                </Link>
            </li>
            <li>
                <a href="#">
                    <Icon type="database"/> Base de datos
                </a>
            </li>
            <li>
                <a href="#">
                    <Icon type="right"/> Politica de privaciddad
                </a>
            </li>
        </ul>
    )
}
function RenderListRight(){
    return (
        <ul>
            <li>
                <a href="#">
                    <Icon type="hdd"/> Sistemas/servidores
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <Icon type="down-square" /> Cms
                </Link>
            </li>
            <li>
                <a href="#">
                    <Icon type="user"/> Portafolio
                </a>
            </li>
            <li>
                <a href="#">
                    <Icon type="right"/> Politica de cookies
                </a>
            </li>
        </ul>
    )
}
