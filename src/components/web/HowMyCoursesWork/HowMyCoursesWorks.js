import React from 'react';
import './HowMyCoursesWorks.scss';
import { Row, Col, Card,Button, Icon} from 'antd';



export default function HowMyCoursesWorks() {
    return (
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work__title">
                <h2>¿Cómo funciona mis cursos?</h2>
                <h3>Cada curso se encuenta en Udemy, activa las 24 hrs, los 365 dias del año, es vitalicia una vez adquirida</h3>
            </Col>
            <Col lg={4} className="how-my-courses-work__title"/>
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>

                    </Col>
                </Row>
            </Col>
            <Col lg={4} />


        </Row>
    )
}

function CardInfo(props){
    const {icon, title, subtitle}= props;
    const {Meta}= Card;

}
