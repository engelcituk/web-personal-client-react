import React, {useState, useEffect} from 'react';
import {Spin,List, notification } from 'antd';
import {Link } from 'react-router-dom';
import moment from 'moment';
import queryString from 'query-string';
import Pagination from '../../../Pagination';
import {getPostsApi} from '../../../../api/post';
import 'moment/locale/es';

import './PostsListWeb.scss';

export default function PostsListWeb(props) {
    const {location, history }= props;
    const [posts, setPosts]=useState(null)
    const {page = 1 } = queryString.parse(location.search);

    useEffect(() => {
        getPostsApi(12,page)
            .then( response => {
                if(response.code !== 200){
                    notification["warning"]({
                        message: response.message
                    });
                }else{
                    setPosts(response.posts);
                }
            })
            .catch( err => {
                notification["error"]({
                    message: "Error del servidor, intente más tarde"
                });
            })
    }, [page])

    return (
        <div>
            <h1>PostsListWeb</h1>
        </div>
    )
}
