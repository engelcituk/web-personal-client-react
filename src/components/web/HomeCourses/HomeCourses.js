import React from 'react';
import { Row, Col, Card,Button} from 'antd';
import {Link} from 'react-router-dom';
import reactHooks from '../../../assets/img/jpg/react-hooks.jpg';
import cssGrid from '../../../assets/img/jpg/css-grid.jpg';
import javascript from '../../../assets/img/jpg/javascript.jpg';
import prestashop from '../../../assets/img/jpg/prestashop.jpg';
import reactNative from '../../../assets/img/jpg/react-native.jpg';
import wordpress from '../../../assets/img/jpg/wordpress.jpg';

import "./HomeCourses.scss";

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4}></Col>
            <Col lg={16}></Col>
            <Col lg={4}></Col>

        </Row>
    )
}
