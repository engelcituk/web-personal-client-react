import React from 'react'
import {Row,Col } from 'antd';
import {useParams } from 'react-router-dom';

export default function Blog(props) {

    const {url} = useParams();

    console.log(url);
    return (
        <div>
            {url ? (<h1>En un post</h1>):(<h1>Listado de posts</h1>)}
        </div>
    )
}
