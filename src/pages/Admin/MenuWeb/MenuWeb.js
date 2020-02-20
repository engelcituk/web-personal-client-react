import React from 'react'
import './MenuWeb.scss';
import { Layout,Tabs } from 'antd';
import {Redirect} from "react-router-dom";
import Logo from "../../../assets/img/png/logo-white.png";
import RegisterForm from '../../../components/Admin/RegisterForm';
import LoginForm from '../../../components/Admin/LoginForm';

import {getAccessTokenApi} from '../../../api/auth';


export default function MenuWeb(){
    

    return (
        <div className="menu-web">
            <h1>Menu web</h1>
        </div>
    )
}