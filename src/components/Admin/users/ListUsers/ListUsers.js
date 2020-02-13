import React, { useState, useEffect } from 'react';
import { Switch,List, Avatar, Button, Icon } from 'antd';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';
import './ListUsers.scss';


export default function ListUsers(props){
    const {usersActive, usersInactive} = props;
  
    const [viewUsersActives, setViewUsersActives] = useState(true)


    return (
        <div className="list-users">
            <div className="list-users__switch">
            <Switch
                defaultChecked
                onChange={() => setViewUsersActives(!viewUsersActives)}
            />
            <span>
                {viewUsersActives ? "Usuarios activos" : "Usuarios desactivados"}
            </span>
                {viewUsersActives ? <UsersActive/> : <UsersInactive/>}
            </div>
        </div>
    );
} 

function UsersActive(){
    return <h3>Lista de usuarios activos</h3>
}

function UsersInactive(){
    return <h3>Lista de usuarios desactivados</h3>
}
