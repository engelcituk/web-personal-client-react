import React, {useState, useEffect} from 'react';
import {Row,Col, Form,Icon, Input, Button, DatePicker, notification } from 'antd';
import moment from 'moment';
import {Editor} from '@tinymce/tinymce-react';
import {getAccessTokenApi} from '../../../../api/auth';
import {addPostApi} from '../../../../api/post';



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
        if(!post){
            console.log('crando post')
            console.log(postData)

        }else{
            console.log('editando post')
            console.log(postData)


        }
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
                                        date: moment(value,"")
                                    
                                }) }
                    />
                </Col>
            </Row>
            <Editor
                value=""
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
                //onEditorChange={this.handleEditorChange}
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