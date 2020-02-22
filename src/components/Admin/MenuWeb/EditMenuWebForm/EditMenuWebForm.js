import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Icon, notification } from 'antd';
import { updateMenuApi } from '../../../../api/menu';
import { getAccessTokenApi } from '../../../../api/auth';

import './EditMenuWebForm.scss';

export default function EditMenuWebForm(props) {
    const {setIsVisibleModal, setReloadMenuWeb, menu} = props;
    const [menuWebData,setMenuWebData]= useState({});

    return (
        <div className="edit-menu-web-form">
            <EditForm/>
        </div>
    )
}

function EditForm(props){
//const {menuWebData, setMenuWebData, editMenu, menu} = props;
    return (
        <Form className="form-edit">
            <Form.Item>
                <Input
                    prefix={<Icon type="font-size"/>}
                    placeholder="Título"
                    //value={menuWebData.title}
                    //onChange={e => setMenuWebData({...menuWebData, title: e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="link"/>}
                    //addonBefore= {selectBefore}
                    placeholder="URL"
                    //value={menuWebData.url}
                    //onChange={e => setMenuWebData({...menuWebData, url: e.target.value})}
                />
            </Form.Item> 
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Actualizar menú
                </Button>
            </Form.Item>
        </Form>
    )
}