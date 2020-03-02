import React, {useState, useEffect} from 'react';
import {Row,Col, Form,Icon, Input, Button, DatePicker, notification } from 'antd';
import moment from 'moment';
import {Editor} from '@tinymce/tinymce-react';
import {getAccessTokenApi} from '../../../../api/auth';


import './AddEditPostForm.scss';

export default function AddEditPostForm(props) {
    const { setIsVisibleModal, setReloadPosts, post} =props;
    const [postData, setPostData]= useState({});

    useEffect(()=>{
        if(post){
            setPostData(post);
        }else{
            setPostData({});
        }
    },[post]);

    return (
        <div className="add-edit-post-form">
            <AddEditForm postData={postData} setPostData={setPostData} post={post}/>
        </div>
    )
}

function AddEditForm(props){
    const { postData, setPostData, post} =props;

    return (
        <Form
            className="add-edit-post-form"
            layout="inline"
        >
            <Row gutter={24}>
                <Col span={8}>
                    <Input
                        prefix={<Icon type="font-size"/>}
                        placeholder="Título"
                        //value={}
                        //onChange={}
                    />
                </Col>
                <Col span={8}>
                    <Input
                        prefix={<Icon type="link"/>}
                        placeholder="Url"
                        //value={}
                        //onChange={}
                    />
                </Col>
                <Col span={8}>
                    <DatePicker
                        style={{width:"100%"}}
                        forma="DD/MM/YY HH:mm:ss"
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                        placeholder="Fecha de publicación"
                        //value={}
                        //onChange={}
                    />
                </Col>

            </Row>
        </Form>
    )
}