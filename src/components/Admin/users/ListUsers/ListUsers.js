import React, { useState } from 'react';
import { Switch,List, Avatar, Button, Icon } from 'antd';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';
import Modal from '../../../modal'; // se importa un modal

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
                
            </div>
            {
            viewUsersActives ? 
            <UsersActive usersActive={usersActive} /> :
            <UsersInactive usersInactive={usersInactive}/>
            }
            <Modal
                title="Mi modal"
                isVisible= {true}
                setIsVisible= { ()=> console.log('shgiejf')}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, eum? Adipisci officia perspiciatis cupiditate voluptates. Maxime dolores fugit, delectus odit aspernatur cupiditate laborum sunt facilis fuga similique architecto, magnam recusandae!
            </Modal>
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
