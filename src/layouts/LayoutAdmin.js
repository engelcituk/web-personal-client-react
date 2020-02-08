import React from 'react'
import {Route } from 'react-router-dom';
import {Layout} from 'antd'
import './LayoutAdmin.scss';

export default function LayoutAdmin(props){
    //console.log(props)
    const {routes} = props;
    const {Header, Content, Footer} = Layout;
    return (
        <Layout>
            <h2>Menu sidebar</h2>
            <Layout>
                <header>header</header>
                <Content>
                    <LoadRouters routes={routes}/>
                </Content>
                <Footer>
                    cituk caamal
                </Footer>
            </Layout>
            <h5>Footer</h5>
        </Layout>
    )
}

function LoadRouters({routes}){

    return routes.map((route, index)=> (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component= {route.component}
        />
    ));
}