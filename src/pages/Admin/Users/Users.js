import React, {useState, useEffect} from 'react';
import {getAccessTokenApi} from '../../../api/auth';
import {getUsersApiActive} from '../../../api/user';

import './Users.scss';

export default function Users(){
    const [usersActive, setUsersActive] = useState([]);
    const [usersInactive, setUsersInactive] = useState([]);

    const token = getAccessTokenApi(); 

    console.log("usersActive: ",usersActive);
    console.log("usersInactive: ",usersInactive);

    useEffect(()=>{
        getUsersApiActive(token,true).then(response => {
            setUsersActive(response.users)
        })
        getUsersApiActive(token,false).then(response => {
            setUsersInactive(response.users)
        })
    },[token])
    return (
        <div>
            <h1>Lista de usuarios</h1>
        </div>
    );
}

