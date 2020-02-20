import React, {useState, useEffect} from 'react';
import './MenuWeb.scss';
import {getMenuApi} from '../../../api/menu';
import MenuWebList from '../../../components/Admin/MenuWeb/MenuWebList'

/* import { Layout,Tabs } from 'antd';
import {Redirect} from "react-router-dom";
import Logo from "../../../assets/img/png/logo-white.png";
import RegisterForm from '../../../components/Admin/RegisterForm';
import LoginForm from '../../../components/Admin/LoginForm';

import {getAccessTokenApi} from '../../../api/auth'; */


export default function MenuWeb(){
    const [menu, setMenu] = useState([]);
    const [reloadMenuWeb, setReloadMenuWeb] = useState(false);

    useEffect( ()=> {
        getMenuApi().then( response => {
            setMenu(response.menus);
        }) 
        setReloadMenuWeb(false)
    },[reloadMenuWeb]);

    return (
        <div className="menu-web">
            <MenuWebList menu= {menu} setReloadMenuWeb={setReloadMenuWeb}/>
        </div>
    )
}