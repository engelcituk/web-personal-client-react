import React from "react";
import { Button, Icon } from 'antd';

import Logo from "../../../assets/img/png/logo-white.png";
import {logout } from '../../../api/auth'

import "./MenuTop.scss";

export default function MenuTop(props) {

    const {menuCollapsed,setMenuCollapsed}= props;
    const logoutUser = () => {
        logout();
        window.location.reload();
    } 
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo"
                src={Logo}
                alt="logo cituk"
                />
                <Button type="link" onClick={ () => setMenuCollapsed(!menuCollapsed)} >
                <Icon type={menuCollapsed ? "double-right": "double-left" }/>
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={ logoutUser } >
                    <Icon type="poweroff"/>
                </Button>
            </div>
        </div>
    );
}