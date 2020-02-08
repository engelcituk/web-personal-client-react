import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {Layout} from 'antd'
import './LayoutAdmin.scss';

export default function LayoutAdmin(props){
    const {routes} = props;
    const {Header, Content, Footer} = Layout;
    return (
        <Layout>
            <h2>Menu sidebar</h2>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer>
                    cituk caamal
                </Footer>
            </Layout>
            <h5>Footer</h5>
        </Layout>
    )
}

function LoadRoutes({routes}){
    return (
        <Switch>
            {
                routes.map((route, index)=> (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component= {route.component}
                    />
                ))
            }
        </Switch>
    );
}