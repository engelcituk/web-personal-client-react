import React, {useState, useEffect} from 'react';
import {getAccessTokenApi} from '../../../api/auth';
import {getUsersApiActive} from '../../../api/user';
//importo componente que trae la lista de usuarios activos y desactivados
import ListUsers from '../../../components/Admin/users/ListUsers';

import './Users.scss';

export default function Users(){
    const [usersActive, setUsersActive] = useState([]);
    const [usersInactive, setUsersInactive] = useState([]);

    const token = getAccessTokenApi(); 


    useEffect(()=>{
        getUsersApiActive(token,true).then(response => {
            setUsersActive(response.users)
        })
        getUsersApiActive(token,false).then(response => {
            setUsersInactive(response.users)
        })
    },[token])
    return (
        <div className="users">
            <ListUsers
                usersActive={usersActive}
                usersInactive={usersInactive}
            />
        </div>
    );
}

