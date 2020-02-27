import React , {useState, useEffect} from 'react';
import { Form,Icon, Input, Button, notification } from 'antd';
import {getAccessTokenApi} from '../../../../api/auth';
import {addCourseApi} from '../../../../api/course';


import './AddEditCourseForm.scss';

export default function AddEditCourseForm(props) {
    const {setIsVisibleModal, setReloadCourses, course}=props;
    const [courseData,setCourseData]= useState({});

    const addCourse = (e) =>{
        e.preventDefault();
       
        if(!courseData.idCourse){
            notification["error"]({
                message: `El id del curso es obligatorio.`
            })
        }else {
            const accessToken = getAccessTokenApi();
            addCourseApi(accessToken,courseData).then( response => {
                const typeNotification = response.code === 200 ? "success":"warning";
                notification[typeNotification]({
                    message: response.message
                });
                setIsVisibleModal(false);
                setReloadCourses(true);
                setCourseData({});
            }).catch( err=> {
                notification["error"]({
                    message: "Error del servidor, intentelo más tarde"
                });
            })


        }
    }
    const updateCourse = (e) =>{
        e.preventDefault();
        console.log('actualizando curso');
    }
    
    
    return (
        <div className="add-edit-course-form">
            <AddEditForm
                course={course}
                addCourse={addCourse}
                updateCourse={updateCourse}
                courseData={courseData}
                setCourseData={setCourseData}
            />
        </div>
    )
}
function AddEditForm(props){
    const {course, addCourse,updateCourse,courseData,setCourseData}=props;

    return(
        <Form className="form-add-edit" onSubmit={ course ? updateCourse : addCourse}>
            <Form.Item>
                <Input
                    prefix={<Icon type="key" />}
                    placeholder="Id del curso"
                    value={courseData.idCourse}
                    onChange={  
                        e =>  setCourseData({...courseData, idCourse: e.target.value})
                    }
                    disabled={course ? true: false}

                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="link" />}
                    placeholder="Url del curso"
                    value={courseData.link}
                    onChange={  
                        e =>  setCourseData({...courseData, link: e.target.value})
                    }
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={ <Icon type="gift" />}
                    placeholder="Cupón de descuento"
                    value={courseData.coupon}
                    onChange={  
                        e =>  setCourseData({...courseData, coupon: e.target.value})
                    }
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={ <Icon type="dollar" /> }
                    placeholder="Precio del curso"
                    value={courseData.price}
                    onChange={  
                        e =>  setCourseData({...courseData, price: e.target.value})
                    }
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    { course ? 'Actualizar curso': 'Guardar curso'} 
                </Button>
            </Form.Item>
        </Form>
    )
}
