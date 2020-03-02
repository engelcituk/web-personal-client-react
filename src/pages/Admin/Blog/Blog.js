import React, {useState, useEffect} from 'react';
import { Button, notification } from 'antd';
import queryString from 'query-string';
import { withRouter } from  'react-router-dom';
import Modal from '../../../components/modal';
import {getAccessTokenApi} from '../../../api/auth';
import {getPostsApi} from '../../../api/post';
import  PostsList  from '../../../components/Admin/Blog/PostsList';
import  Pagination  from '../../../components/Pagination';
import AddEditPostForm from '../../../components/Admin/Blog/AddEditPostForm'

import './Blog.scss';

 function Blog(props) {
    const {location,history} = props;
    const [posts, setPosts]= useState(null);
    const [reloadPosts, setReloadPosts]= useState(false);
    const [isVisibleModal, setIsVisibleModal]= useState(false);
    const [modalTitle, setModalTitle]= useState("");
    const [modalContent, setModalContent]= useState(null);
    const { page=1 }= queryString.parse(location.search);

    useEffect(()=>{
        getPostsApi(12, page)
        .then( response => {
            if(response.code !== 200){
                notification["error"]({
                    message: response.message
                });
            }else {
                setPosts(response.posts)
            }
        })
        .catch( err => {
            notification["error"]({
                message: "Error del servidor, intentelo más tarde"
            });

        })
        setReloadPosts(false);
    },[page,reloadPosts]);

    const addPost = post => {
        setIsVisibleModal(true);
        setModalTitle("Creando nueva publicación");
        setModalContent(
            <AddEditPostForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadPosts={setReloadPosts}
                post={null}
            />
        )
    }
     if(!posts){
         return null;
     }
    return (
        <div className="blog">
            <div className="blog__add-post">
                <Button type="primary" onClick={addPost}>
                    Nuevo post
                </Button>
            </div>
            <PostsList posts={posts} setReloadPosts={setReloadPosts}/> {/*  listas de posts */}

            <Pagination posts={posts} location={location} history={history} /> {/*  elementos de paginacion  */}

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                width="75%"
            >
            {modalContent}
            </Modal>
        </div>
    )
}

export default withRouter(Blog);
