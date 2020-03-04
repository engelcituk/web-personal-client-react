import React from 'react'
import {Row,Col } from 'antd';
import {useParams } from 'react-router-dom';
import PostsListWeb from '../components/web/Blog/PostsListWeb'

export default function Blog(props) {
    const {location, history}= props;
    const {url} = useParams();

    console.log(url);
    return (

        <Row>
            <Col md={4}/>
            <Col md={16}>
            {url ? (<h1>En un post</h1>):(<PostsListWeb location={location} history={history}/>)}
            
            </Col>
            <Col md={4}/>

        </Row>
    )
}
