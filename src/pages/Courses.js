import React , {useState, useEffect} from 'react';
import PresentationCourses from '../components/web/Courses/PresentationCourses';
import CoursesList from '../components/web/Courses/CoursesList';
import { Row, Col, Spin,notification} from 'antd';
import {getCoursesApi} from '../api/course';
import { from } from 'rxjs';

export default function Home(){
    return (
        <Row>
            <Col md={4}/>
            <Col md={16}>
                <PresentationCourses/>
                
                <CoursesList/>
            </Col>
            <Col md={4}/>

        </Row>
        
    )
}