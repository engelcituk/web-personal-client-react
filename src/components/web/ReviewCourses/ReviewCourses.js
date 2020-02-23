import React from 'react';
import './ReviewCourses.scss';
import { Row, Col, Card, Avatar} from 'antd';
import AvatarPersona from '../../../assets/img/png/no-avatar.png'


export default function ReviewCourses() {
    return (
        <div>
            <Row className="reviews-courses">
                <Row>
                    <Col lg={4}/>
                    <Col lg={16} className="reviews-courses__title">
                        <h2>forma parte de los miles de estudiantes</h2>
                    </Col>
                    <Col lg={4}/>
                </Row>
                <Row>
                    <Col lg={4}/>
                    <Col lg={16}    >
                        <Row className="row-cards">
                            <Col md={8}>
                                <CardReview
                                    name="Alonso Cardenas"
                                    subtitle="Alumno de Udemy"
                                    avatar={AvatarPersona}
                                    review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure corrupti nemo dolore odio saepe ex? Cum nisi dolores, neque, reprehenderit suscipit nemo, debitis voluptas consequuntur harum possimus praesentium iure."
                                />
                            </Col>
                            <Col md={8}>
                                <CardReview
                                    name="David Peraza"
                                    subtitle="Alumno de Udemy"
                                    avatar={AvatarPersona}
                                    review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure corrupti nemo dolore odio saepe ex? Cum nisi dolores, neque, reprehenderit suscipit nemo, debitis voluptas consequuntur harum possimus praesentium iure."
                                />
                            </Col>
                            <Col md={8}>
                                <CardReview
                                    name="Mario Perez"
                                    subtitle="Alumno de Udemy"
                                    avatar={AvatarPersona}
                                    review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure corrupti nemo dolore odio saepe ex? Cum nisi dolores, neque, reprehenderit suscipit nemo, debitis voluptas consequuntur harum possimus praesentium iure."
                                />
                            </Col>
                            <Col md={8}>
                                <CardReview
                                    name="Jorge Rodriguez"
                                    subtitle="Alumno de Udemy"
                                    avatar={AvatarPersona}
                                    review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure corrupti nemo dolore odio saepe ex? Cum nisi dolores, neque, reprehenderit suscipit nemo, debitis voluptas consequuntur harum possimus praesentium iure."
                                />
                            </Col>
                            <Col md={8}>
                                <CardReview
                                    name="Juan Ramos"
                                    subtitle="Alumno de Udemy"
                                    avatar={AvatarPersona}
                                    review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure corrupti nemo dolore odio saepe ex? Cum nisi dolores, neque, reprehenderit suscipit nemo, debitis voluptas consequuntur harum possimus praesentium iure."
                                />
                            </Col>
                            <Col md={8}>
                                <CardReview
                                    name="José Vázquez"
                                    subtitle="Alumno de Udemy"
                                    avatar={AvatarPersona}
                                    review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure corrupti nemo dolore odio saepe ex? Cum nisi dolores, neque, reprehenderit suscipit nemo, debitis voluptas consequuntur harum possimus praesentium iure."
                                />
                            </Col>
                            
                        </Row>
                    </Col>
                    <Col lg={4}/>
                </Row>
            </Row>
        </div>
    )
}
 function CardReview(props) {
     const {name,subtitle, avatar, review}= props;
     const {Meta }= Card;

     return (
         <Card className="reviews-courses__card">
            <p>{review}</p>
            <Meta
                avatar={<Avatar src={avatar}/>}
                title={name}
                description={subtitle}
            />
         </Card>
     )
 }