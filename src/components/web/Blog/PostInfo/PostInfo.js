import React, {useState, useEffect} from 'react';
import {Spin, notification } from 'antd';
import moment from 'moment';
import {getPostApi} from '../../../../api/post';
import { Helmet } from 'react-helmet';
import 'moment/locale/es';

import './PostInfo.scss';

export default function PostInfo(props) {
    const {url} = props;
    const [postInfo, setPostInfo]=useState(null)

    useEffect(() => {
        getPostApi(url)
        .then( response => {
            if(response.code !== 200){
                notification["warning"]({
                    message: response.message
                });
            }else{
                setPostInfo(response.post);
            }
        }).catch( err => {
            notification["error"]({
                message: "Error del servidor, intente más tarde"
            });
        })
            
    }, [url]);

    if(!postInfo){
        return(
            <Spin tip="cargando" style={{width:"100%", padding:"200px 0"}}/>
        )
    }

    return (
        <>
        <Helmet>
            <title>{postInfo.title}</title>
            <meta name="description" content={postInfo.title}  data-react-helmet="true"/>            

        </Helmet>
        <div className="post-info">
            <h1 className="post-info__title">{postInfo.title}</h1>
            <div className="post-info__creation-date">
                {moment(postInfo.date).local("es").format("LL")}
            </div>
            <div 
                className="post-info__description"
                dangerouslySetInnerHTML={{__html: postInfo.description}}
            />

     
        </div>
        </>
    )
}
