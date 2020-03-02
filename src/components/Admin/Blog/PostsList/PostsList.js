import React from 'react';
import { Link } from  'react-router-dom';
import './PostsList.scss';
import { List, Button, Icon, Modal, notification } from 'antd';
import { type } from 'os';
const {confirm} = Modal;

export default function PostsList(props) {
    const {posts} = props;
    return (
        <div className="posts-list">
            <List
                dataSource={posts.docs}
                renderItem={ post => <Post post={post}/>}
            />
        </div>
    )
}

function Post(props){
    const {post} = props;

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
                <Button type="danger">
                    <Icon type="delete"/>
                </Button>
            ]}
        >
            <List.Item.Meta title={post.title}/>
        </List.Item>
    )
}