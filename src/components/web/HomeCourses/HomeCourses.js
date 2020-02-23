import React from 'react';
import { Row, Col, Card,Button} from 'antd';
import {Link} from 'react-router-dom';


import "./HomeCourses.scss";

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Cursos que he llevado y continúo aprendiendo <br/>para mejorar mis habilidades</h2>
            </Col>
            <Col lg={4}></Col>
            <Col lg={16}>
                <Row className="row-courses"> 
                    <Col md={6}>
                        <CardCourse 
                            image="https://i.udemycdn.com/course/240x135/2048151_1c32_2.jpg"
                            title="Vue js 2 Fullstack MEVN"
                            subtitle="Vue.js 2 Aprende con la práctica, descubriendo Vuex, Rutas protegidas, Vue CLI 3 UI, Nuxt.js, Node.js, Express y MongoDB"
                            link="https://www.udemy.com/course/curso-vue/"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse 
                            image="https://i.udemycdn.com/course/240x135/2264768_a446.jpg"
                            title="Desarrollo Full Stack MERN "
                            subtitle="Desarrollo Full Stack, creando una web personal con el Stack MERN (MongoDB, Express, React y Node)." 
                            link="https://www.udemy.com/course/web-personal-mern-full-stack-mongodb-express-react-node/"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse 
                            image="https://i.udemycdn.com/course/240x135/1420028_b32f.jpg"
                            title="Vue js 2 Completo ¡De 0 a Experto! + Firebase + Node [MEVN]"
                            subtitle="Vue.js 2 Aprende con la práctica, descubriendo Vuex, Rutas protegidas, Vue CLI 3 UI, Nuxt.js, Node.js, Express y MongoDB"
                            link="https://www.udemy.com/course/curso-vue/"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse 
                            image="https://i.udemycdn.com/course/240x135/1075334_8b5f_4.jpg"
                            title="Vue js 2 Completo ¡De 0 a Experto! + Firebase + Node [MEVN]"
                            subtitle="Vue.js 2 Aprende con la práctica, descubriendo Vuex, Rutas protegidas, Vue CLI 3 UI, Nuxt.js, Node.js, Express y MongoDB"
                            link="https://www.udemy.com/course/curso-vue/"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse 
                            image="https://i.udemycdn.com/course/240x135/2756642_235b_3.jpg"
                            title="Vue js 2 Completo ¡De 0 a Experto! + Firebase + Node [MEVN]"
                            subtitle="Vue.js 2 Aprende con la práctica, descubriendo Vuex, Rutas protegidas, Vue CLI 3 UI, Nuxt.js, Node.js, Express y MongoDB"
                            link="https://www.udemy.com/course/curso-vue/"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse 
                            image="https://i.udemycdn.com/course/240x135/1235212_3204_2.jpg"
                            title="Vue js 2 Completo ¡De 0 a Experto! + Firebase + Node [MEVN]"
                            subtitle="Vue.js 2 Aprende con la práctica, descubriendo Vuex, Rutas protegidas, Vue CLI 3 UI, Nuxt.js, Node.js, Express y MongoDB"
                            link="https://www.udemy.com/course/curso-vue/"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4}></Col>
            <Col lg={24} className="home-courses__more">
                <Link to="/courses">
                    <Button>
                        Ver más
                    </Button>
                </Link>
            </Col>
        </Row>

    )
}

function CardCourse(props){
    const {image, title, subtitle, link} = props;
    const {Meta} = Card;

    return (
        <a href={link} target="_blank" without rel="noopener noreferrer">
            <Card
                className="home-courses__card"
                cover={<img src={image} alt={title} /> }
                actions={[<Button>Ingresar</Button>]}
                >
                <Meta title={title} description={subtitle}/>
            </Card>
        </a>
    )
}
