import React, {useState} from 'react';
import './Newsletter.scss';
import { Form, Icon, Input, Button, notification} from 'antd';
import {suscribeNewsletterApi} from '../../../api/newsletter';


export default function Newsletter() {

    const [email, setEmail] = useState("");

    const onSubmit= (e) => {
        e.preventDefault();
        const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/; //pattern email

        const resultValidation = emailValid.test(email);
        if(!resultValidation){
            notification["error"]({
                message: "El correo electrónico no es valido"
            })
        }else{
            suscribeNewsletterApi(email).then( response => {
                if(response.code !== 200){
                    notification["warning"]({
                        message: response.message
                    })
                }else{
                    notification["success"]({
                        message: response.message
                    }) ;
                    setEmail("");
                }
            })   
        }

    }
    return (
        <div className="newsletter">
            <h3>Newsletter</h3>
            <Form onSubmit={onSubmit}>
                <Form.Item>
                    <Input
                      
                        prefix={<Icon type="mail" style={{color:"rgba(0,0,0,0.5)"}}/>}
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={e => setEmail(e.target.value) }
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Me suscribo
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}


