import React , {useState, useEffect} from 'react';
import PresentationCourses from '../components/web/Courses/PresentationCourses';
import CoursesList from '../components/web/Courses/CoursesList';
import { Row, Col, Spin,notification} from 'antd';
import {getCoursesApi} from '../api/course';
import { Helmet } from 'react-helmet';

export default function Home(){
     const [courses, setCourses] = useState(null);
     useEffect(() =>{
        getCoursesApi()
            .then(response => {
                if (response.code !==200 ) {
                notification["warning"]({
                    message: response.message
                })
            }else{
                setCourses(response.courses)
            }
        })
        .catch( (err) => {
            notification["warning"]({
                message: "Error del servidor, intentelo más tarde"                
            })
        })
    },[])
    return (
        <>
        <Helmet>
            <title>Cursos que he visto</title>
        </Helmet>
        <Row>
            <Col md={4}/>
            <Col md={16}>
                <PresentationCourses/>
                {!courses ? (
                    <Spin 
                        tip="Cargando cursos" 
                        style={{textAlign:"center", 
                        width:"100%", 
                        padding:"20px"}}
                        />
                ):
                (
                    <CoursesList courses={courses}/>
                )
                }
            </Col>
            <Col md={4}/>
        </Row>
      </>  
    )
}