import React, {useState, useEffect} from 'react';
import {Row,Col, Form,Icon, Input, Button, DatePicker, notification } from 'antd';
import moment from 'moment';
import {Editor} from '@tinymce/tinymce-react';
import {getAccessTokenApi} from '../../../../api/auth';
import {addPostApi, updatePostApi} from '../../../../api/post';



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

    const processPost = e =>{
        e.preventDefault();
        const { title, url, date, description }= postData;

        if(!title || !url || !date || !description){
            notification["error"]({
                message: "Todos los campos son obligatorios "
            });
        }else{
            if(!post){
                addPost();
    
            }else{
                updatePost();   
            }
        }
    }

    const addPost = () => {
        const token = getAccessTokenApi();
        addPostApi(token,postData).then( response => {
            const typeNotification = response.code === 200 ? "success" : "warning";
                notification[typeNotification]({
                    message: response.message
                });
                setIsVisibleModal(false);
                setReloadPosts(true);
                setPostData ({});
        }).catch( err=> {
            notification["error"]({
                message: "Error del servidor, intentelo más tarde"
            });
        })
    }

    const updatePost = () => {
        const token = getAccessTokenApi();
        updatePostApi(token, post._id, postData).then( response => {
            const typeNotification = response.code === 200 ? "success" : "warning";
                notification[typeNotification]({
                    message: response.message
                });
                setIsVisibleModal(false);
                setReloadPosts(true);
                setPostData ({});
        }).catch( err=> {
            notification["error"]({
                message: "Error del servidor, intentelo más tarde"
            });
        })
    }
  
    return (
        <div className="add-edit-post-form">
            <AddEditForm postData={postData} setPostData={setPostData} post={post} processPost={processPost}/>
        </div>
    )
}

function AddEditForm(props){
    const { postData, setPostData, post, processPost} =props;

    return (
        <Form
            className="add-edit-post-form"
            layout="inline"
            onSubmit={processPost}
        >
            <Row gutter={24}>
                <Col span={8}>
                    <Input
                        prefix={<Icon type="font-size"/>}
                        placeholder="Título"
                        value={postData.title}
                        onChange={ e=> setPostData({...postData, title: e.target.value})}
                    />
                </Col>
                <Col span={8}>
                    <Input
                        prefix={<Icon type="link"/>}
                        placeholder="Url"
                        value={postData.url}
                        onChange={ e=> setPostData({...postData, url: tranformTextToUrl(e.target.value)})}
                    />
                </Col>
                <Col span={8}>
                    <DatePicker
                        style={{width:"100%"}}
                        forma="DD/MM/YY HH:mm:ss"
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                        placeholder="Fecha de publicación"
                        value={ postData.date && moment(postData.date)}
                        onChange={ (e, value) => 
                            setPostData({
                                ...postData,
                                date: value //moment(value, "DD/MM/YY HH:mm:ss").toISOString()
                            })}
                    />
                </Col>
            </Row>
            <Editor
                value={postData.description ? postData.description  : "" }
                init={{
                height: 400,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
                }}
                onChange={ e => setPostData({...postData, description: e.target.getContent()})}
            />
            <Button type="primary" htmlType="submit" className="btn-submit">
                {post ? "Actualizar post" : "Crear post"}
            </Button>
        </Form>
    )
}

function tranformTextToUrl(text){
    const url = text.replace(" ","-");
    return url.toLowerCase();
}