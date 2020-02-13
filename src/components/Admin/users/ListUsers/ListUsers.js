import React, { useState, useEffect } from 'react';
import { Switch,List, Avatar, Button, Icon } from 'antd';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';
import './ListUsers.scss';
import { type } from 'os';


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
                {
                    viewUsersActives ? 
                    <UsersActive usersActive={usersActive} /> :
                    <UsersInactive usersInactive={usersInactive}/>
                }
            </div>
        </div>
    );
} 

function UsersActive(props){
    const {usersActive} = props;
    return (
        <List
            className="users-active"
            itemLayout="horizontal"
             dataSource={usersActive}
             renderItem = {
                 user => (
                     <List.Item
                        actions={[
                            <Button
                                type="primary"
                                onClick={ ()=> console.log('edit a user')}
                            >
                                <Icon type="edit"/> 
                            </Button>,
                            <Button
                                type="danger"
                                onClick={ ()=> console.log('desactivar a user')}
                            >
                                <Icon type="stop"/> 
                            </Button>,
                             <Button
                                type="danger"
                                onClick={ ()=> console.log('borrar a user')}
                            >
                                <Icon type="delete"/> 
                            </Button>
                        ]}
                     >
                         <List.Item.Meta
                            avatar = {<Avatar src={ user.avatar ? user.avatar : NoAvatar} />}
                            title={`
                                ${ user.name ? user.name : '...'}
                                ${ user.lastname ? user.lastname : '...'}
                            `}
                            description={user.email}
                         />
                     </List.Item>
                 )
             }
        />
    )
}

function UsersInactive(props){
    const {usersInactive} = props;

    return (
        <List
            className="users-active"
            itemLayout="horizontal"
             dataSource={usersInactive}
             renderItem = {
                 user => (
                     <List.Item
                        actions={[
                            <Button
                                type="primary"
                                onClick={ ()=> console.log('activar a user')}
                            >
                                <Icon type="check"/> 
                            </Button>,
                            
                             <Button
                                type="danger"
                                onClick={ ()=> console.log('borrar a user')}
                            >
                                <Icon type="delete"/> 
                            </Button>
                        ]}
                     >
                         <List.Item.Meta
                            avatar = {<Avatar src={ user.avatar ? user.avatar : NoAvatar} />}
                            title={`
                                ${ user.name ? user.name : '...'}
                                ${ user.lastname ? user.lastname : '...'}
                            `}
                            description={user.email}
                         />
                     </List.Item>
                 )
             }
        />
    )
}
