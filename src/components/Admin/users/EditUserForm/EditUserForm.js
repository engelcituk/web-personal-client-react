import React, { useState } from 'react';
/* import { Switch, List, Avatar, Button, Icon } from 'antd';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';
import Modal from '../../../modal'; // se importa un modal */

import './EditUserForm.scss';

export default function EditUserForm(props){
    const {user} = props;

    return (
        <div>

            <h1>formulario de edicion de usuario</h1>
            <h2>{user.email}</h2>
        </div>

    )
} 