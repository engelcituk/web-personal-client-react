import React from 'react';
import { Link } from  'react-router-dom';
import './PostsList.scss';
import { List, Button, Icon, Modal, notification } from 'antd';
import {getAccessTokenApi} from '../../../../api/auth';
import {deletePostApi} from '../../../../api/post';
const {confirm} = Modal;


export default function PostsList(props) {
    const {posts, setReloadPosts} = props;

    const deletePost = post => {
        const accessToken = getAccessTokenApi();

        confirm({
            title: "Eliminando post",
            content: `¿Estas seguro que quieres eliminar a ${post.title} ?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk(){
                deletePostApi(accessToken, post._id)
                    .then( response => {
                        const typeNotification = response.code === 200 ? "success" : "warning";

                        notification[typeNotification]({
                            message: response.message
                        });
                        setReloadPosts(true)
                    })
                    .catch( err => {
                        notification["error"]({
                            message: "Error del servidor intente más tarde"
                    })
                })
            }
        });

    }
    return (
        <div className="posts-list">
            <List
                dataSource={posts.docs}
                renderItem={ post => <Post post={post} deletePost={deletePost}/>}
            />
        </div>
    )
}

function Post(props){
    const {post,deletePost} = props;

    return (
        <List.Item
            actions={[
                <Link to={`/lblog/${post.url}`} target="_blank">
                    <Button type="primary">
                        <Icon type="eye"/>
                    </Button>
                </Link>
                ,
                <Button type="primary">
                    <Icon type="edit"/>
                </Button>,
                <Button type="danger" onClick={ ()=> deletePost(post)}>
                    <Icon type="delete"/>
                </Button>
            ]}
        >
            <List.Item.Meta title={post.title}/>
        </List.Item>
    )
}