import React , {useState, useEffect} from 'react';
import './CoursesList.scss';
import {getCourseDataUdemyApi} from '../../../../api/course';
import { List, Button,Icon, Modal as ModalAntd, notification } from 'antd';
import DragSortableList from 'react-drag-sortable';
import Modal from '../../../modal';

const { confirm } = ModalAntd;

export default function CoursesList(props) {
    const {courses, setReloadCourses}=props;
    const [listCourses, setListCourses] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    useEffect(() =>{
        const listCoursesArray = [];
        courses.forEach(course => {
            listCoursesArray.push({
                content:(
                    <Course
                        course={course}

                    />
                )
            });
        });
        setListCourses(listCoursesArray);
    },[courses])

    const onSort = (sortedList, dropEvent) => { 
        console.log(sortedList)

    }
    if(courses.length > 0){
        courses.forEach(course => {
            getCourseDataUdemyApi(course.idCourse).then( response => {
                console.log(response)
            }) 
        });

    }
    return (
        <div className="courses-list">
            <div className="courses-list__header">
                <Button type="primary" onClick={ ()=> console.log('eueud')}>Nuevo curso</Button>
            </div>

            <div className="courses-list__items">
            {listCourses.length === 0 && (
                <h2 style={{ textAlign: "center",margin:0}}>
                    No tienes cursos creados
                </h2>
            )}
            <DragSortableList items={listCourses} onSort={onSort} type="vertical"/>
            </div>
        </div>
    )
}

function Course(props){
    const {course} = props;
    const [courseData, setCoursedata]= useState(null)

    useEffect(() =>{
        getCourseDataUdemyApi(course.idCourse).then( response => {
            if(response.code !== 200){
                notification["warning"]({
                    message: `El curso con el id ${course.idCourse} no se ha encontrado.`
                })
            }
            setCoursedata(response.data)
        })
    },[course])

    if(!courseData){
        return null;
    }
    return(
        <List.Item
            actions={[
                <Button type="primary" onClick={ ()=> console.log('editar curso')}>
                    <Icon type="edit"/>
                </Button>,
                <Button type="danger" onClick={ ()=> console.log('eliminar curso')}>
                    <Icon type="delete"/>
                </Button>
            ]}
        >
            <img
                src= {courseData.image_480x270}
                alt={courseData.title}
                style={{ width:"100px",marginRight:"20px"}}
            />
            <List.Item.Meta
                title={`${courseData.title} | ID ${course.idCourse}`}
                description={courseData.headline}
            />
        </List.Item>
       
    )
}