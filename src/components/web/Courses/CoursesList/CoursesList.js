import React, {useState,useEffect} from 'react'
import './CoursesList.scss';
import { Row, Col, Card,Button,Rate, notification } from 'antd';

import {getCourseDataUdemyApi} from '../../../../api/course';


export default function CoursesList(props) {
    const {courses} = props;
    return (
        <div className="courses-list">
            <Row>
                {courses.map( course => (
                    <Col key={course._id} md={8} className="courses-list__course">
                        <Course  course={course}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
function Course(props){
    const {course}=props;
    const  [courseInfo, setCourseInfo] = useState({});
    const {Meta} = Card;

    useEffect(() => {
        getCourseDataUdemyApi(course.idCourse)
            .then( response => {
                if(response.code !== 200){
                    notification["warning"]({
                        message: response.message
                    })
                }else{
                    setCourseInfo(response.data)
                }

        }).catch( ()=> {
            notification["error"]({
                message: "Error del servidor, intentelo mas tarde"
            })
        })
    }, [course])

    return(
            <a href="#" target="_blank" rel="noopener noreferrer" alt="curso">
                <Card
                    cover={<img src={courseInfo.image_480x270} alt={courseInfo.title}/>}
                    
                >
                    <Meta
                        title={courseInfo.title}
                        description={courseInfo.headline}
                    />
                    <Button>
                        Entrar en el curso
                    </Button>
                    <div className="courses-list__course-footer">
                        <span>
                            {course.price ? `$ ${course.price}`:`${courseInfo.price}`}
                        </span>
                        <Rate disabled defaultValue={5}/>
                    </div>
                </Card>
            </a>
        )
}
