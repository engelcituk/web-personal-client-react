import React , {useState, useEffect} from 'react';
import { Form,Icon, Input, Button, notification } from 'antd';
import {getAccessTokenApi} from '../../../../api/auth';
 

import './AddEditCourseForm.scss';

export default function AddEditCourseForm(props) {
    const {setIsVisibleModal, setReloadCourses, course}=props;
    const [courseData,setCouseData]= useState({});
    return (
        <div className="add-edit-course-form">
            <AddEditForm
                course={course}
            />
        </div>
    )
}
function AddEditForm(props){
    const {course}=props;

    return(
        <Form className="form-add-edit" onSubmit={() => console.log('submit form')}>
            <Form.Item>
                <Input
                    prefix={<Icon type="key" />}
                    placeholder="Id del curso"
                    //onChange={inputValidation}
                    //value={inputs.email}
                    disabled={course ? true: false}

                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="link" />}
                    placeholder="Url del curso"
                    //onChange={inputValidation}
                    //value={inputs.email}
                    disabled={course ? true: false}

                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix=
                        {
                            <Icon
                                type="gift"
                                disabled={course ? true: false}
                            />
                        }
                    placeholder="Cupón de descuento"
                    
                    //onChange={inputValidation}
                    //value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix=
                        {
                            <Icon
                                type="dollar"
                                disabled={course ? true: false}
                            />
                        }
                    placeholder="Precio del curso"
                    
                    //onChange={inputValidation}
                    //value={inputs.email}
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
