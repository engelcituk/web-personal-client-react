import React, { useState, useEffect } from 'react';
import { Switch,List, Avatar, Button, Icon, notification, Modal as ModalAntd} from 'antd';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';
import Modal from '../../../modal'; // se importa componente modal
import EditUserForm from '../EditUserForm'; // se importa componente formulario de edicion de usuarios
import {getAvatarApi, activateUserApi, deleteUserApi } from '../../../../api/user';
import {getAccessTokenApi} from '../../../../api/auth';
import './ListUsers.scss';

const { confirm } = ModalAntd;

export default function ListUsers(props){
    //estados
    const {usersActive, usersInactive, setReloadUsers} = props;
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
                setReloadUsers={setReloadUsers}
            /> :
            <UsersInactive usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
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
    const {
        usersActive,
        setIsVisibleModal,
        setModalTitle,
        setModalContent,
        setReloadUsers
    } = props;

    //this function show the modal
    const editUser = user => {
        setIsVisibleModal(true);
        setModalTitle(`Editar a 
                       ${user.name ? user.name : "..."}
                       ${user.lastname ? user.lastname : "..."}`);
        setModalContent(
            <EditUserForm 
                user={user}
                setIsVisibleModal={setIsVisibleModal}
                setReloadUsers={setReloadUsers}
            />
        );
    }
    return (
        <List
            className="users-active"
            itemLayout="horizontal"
             dataSource={usersActive}
             renderItem = {user => <UserActive user={user} editUser={editUser} setReloadUsers={setReloadUsers}/> }
        />
    )
}

function UserActive(props){
    const {user, editUser, setReloadUsers}=props;
    const [avatar, setAvatar] = useState(null);

    useEffect( ()=> {
        if(user.avatar){
            getAvatarApi(user.avatar).then(response => {
                setAvatar(response);
            })
        }else {
            setAvatar(null)
        }
    },[user]);

    const desactivateUser = ()=> {
        const accessToken = getAccessTokenApi();

        activateUserApi(accessToken, user._id, false)
        .then( response => {
            notification["success"]({
                message: response
            });
            setReloadUsers(true);
        })
        .catch( err => {
            notification["error"]({
                message: err
            })
        })
    }

    const showDeleteConfirm = () => {
        const accessToken = getAccessTokenApi();

        confirm({
            title: "Eliminando usuario",
            content: `¿Estas seguro que quieres eliminar a ${user.email}`,

        });
    }

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
                    onClick={ desactivateUser}
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
    const {usersInactive, setReloadUsers} = props;

    return (
        <List
            className="users-active"
            itemLayout="horizontal"
             dataSource={usersInactive}
             renderItem = { user => <UserInactive user={user} setReloadUsers={setReloadUsers}/> }
        />
    )
}

function UserInactive(props){
    const {user,setReloadUsers}=props;
    const [avatar, setAvatar] = useState(null);

    useEffect( ()=> {
        if(user.avatar){
            getAvatarApi(user.avatar).then(response => {
                setAvatar(response);
            })
        }else {
            setAvatar(null)
        }
    },[user]);

    const activateUser = ()=> {
        const accessToken = getAccessTokenApi();

        activateUserApi(accessToken, user._id, true)
        .then( response => {
            notification["success"]({
                message: response
            });
            setReloadUsers(true);
        })
        .catch( err => {
            notification["error"]({
                message: err
            })
        })
    }
    return (
        <List.Item
        actions={[
            <Button
                type="primary"
                onClick={ activateUser}
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
