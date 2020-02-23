import React from 'react';
import './ReviewCourses.scss';
import { Row, Col, Card, avatar, Avatar} from 'antd';
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
                    <Col lg={16} className="reviews-courses__title">
                        <Row className="row-cards">
                            <Col md={8}>
                                <CardReview/>
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
         <Card className="reviews-courses-__card">
            <p>{review}</p>
            <Meta
                avatar={<Avatar src={avatar}/>}
                title={name}
                description={subtitle}
            />
         </Card>
     )
 }