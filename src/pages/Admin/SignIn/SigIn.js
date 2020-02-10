import React from 'react'
import './SignIn.scss';
import { Layout,Tabs } from 'antd';
import {Redirect} from "react-router-dom";
import Logo from "../../../assets/img/png/logo-white.png";

export default function SignIng(){
    const {Content} = Layout;
    const {TabPane} = Tabs;

    return (
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1 className="sign-in__content-logo">
                    <img src={Logo} alt="logo"/>
                </h1>
                <div class="sign-in__content-tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Entrar</span>} key="1">
                        Componente del login
                        </TabPane>  
                        <TabPane tab={<span>Nuevo usuario</span>} key="2">
                        Componente del nuevo usuario
                        </TabPane>                   
                    </Tabs>
                </div>
            </Content>
        </Layout>
    )
}