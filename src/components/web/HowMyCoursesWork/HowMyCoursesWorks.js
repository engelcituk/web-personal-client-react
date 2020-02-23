import React from 'react';
import './HowMyCoursesWorks.scss';
import { Row, Col, Card, Icon} from 'antd';



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
                        <CardInfo
                            icon="clock-circle"
                            title="Cursos y clases"
                            description="Cursos de entre 10-30 hrs"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon="key"
                            title="Acceso 24/7"
                            description="Cursos de entre 10-30 hrs"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon="message"
                            title="Aprendizaje colaborativo"
                            description="Cursos de entre 10-30 hrs"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon="user"
                            title="Mejora tu perfil profesional"
                            description="Cursos de entre 10-30 hrs"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon="dollar"
                            title="Precios accesibles"
                            description="Cursos de entre 10-30 hrs"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon="check-circle"
                            title="Certificados de finalización"
                            description="Cursos de entre 10-30 hrs"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />


        </Row>
    )
}

function CardInfo(props){
    const {icon, title, description}= props;
    const {Meta}= Card;

    return(
        <Card className="how-my-courses-work__card">
            <Icon type={icon}/>
            <Meta title={title} description={description}/>
        </Card>
    )
}
