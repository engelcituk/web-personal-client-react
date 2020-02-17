import React, { useState, useEffect } from 'react';
import { Switch,List, Avatar, Button, Icon } from 'antd';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';
import Modal from '../../../modal'; // se importa componente modal
import EditUserForm from '../EditUserForm'; // se importa componente formulario de edicion de usuarios
import {getAvatarApi} from '../../../../api/user';



import './ListUsers.scss';

export default function ListUsers(props){
    //estados
    const {usersActive, usersInactive} = props;
    const [viewUsersActives, setViewUsersActives] = useState(true);
    //estados para el modal
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null)


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
            <UsersActive
                usersActive = { usersActive }
                //props para el modal
                setIsVisibleModal = { setIsVisibleModal }
                setModalTitle = { setModalTitle }
                setModalContent = { setModalContent } 
            /> :
            <UsersInactive usersInactive={usersInactive}/>
            }
            <Modal
                title={modalTitle}
                isVisible= {isVisibleModal}
                setIsVisible= { setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </div>
    );
} 

function UsersActive(props){
    const {usersActive, setIsVisibleModal, setModalTitle, setModalContent} = props;

    //this function show the modal
    const editUser = user => {
        setIsVisibleModal(true);
        setModalTitle(`Editar a 
                       ${user.name ? user.name : "..."}
                       ${user.lastname ? user.lastname : "..."}`);
        setModalContent(<EditUserForm user={user}/>);
    }
    return (
        <List
            className="users-active"
            itemLayout="horizontal"
             dataSource={usersActive}
             renderItem = {user => <UserActive user={user} editUser={editUser} /> }
        />
    )
}

function UserActive(props){
    const {user, editUser}=props;
    const [avatar, setAvatar] = useState(null);

    useEffect( ()=> {
        if(user.avatar){
            getAvatarApi(user.avatar).then(response => {
                setAvatar(response);
            })
        }else {
            setAvatar(null)
        }
    },[user])

    return (
        <List.Item
            actions={[
                <Button
                    type="primary"
                    onClick={ ()=> editUser(user )}
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
                avatar = {<Avatar src={ avatar ? avatar : NoAvatar} />}
                title={`
                    ${ user.name ? user.name : '...'}
                    ${ user.lastname ? user.lastname : '...'}
                `}
                description={user.email}
                />
            </List.Item>
    )
}

function UsersInactive(props){
    const {usersInactive} = props;

    return (
        <List
            className="users-active"
            itemLayout="horizontal"
             dataSource={usersInactive}
             renderItem = { user => <UserInactive user={user}/> }
        />
    )
}

function UserInactive(props){
    const {user}=props;
    const [avatar, setAvatar] = useState(null);

    useEffect( ()=> {
        if(user.avatar){
            getAvatarApi(user.avatar).then(response => {
                setAvatar(response);
            })
        }else {
            setAvatar(null)
        }
    },[user])

    return (
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
            avatar = {<Avatar src={ avatar ? avatar : NoAvatar} />}
            title={`
                ${ user.name ? user.name : '...'}
                ${ user.lastname ? user.lastname : '...'}
            `}
            description={user.email}
         />
     </List.Item>
    )
}
