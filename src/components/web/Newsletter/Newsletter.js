import React from 'react';
import './Newsletter.scss';
import { Form, Icon, Input, Button, notification} from 'antd';


export default function Newsletter() {
    const onSubmit= () => {
        console.log('newsletter enviado');
    }
    return (
        <div className="newsletter">
            <h3>Newsletter</h3>
            <Form onSubmit={onSubmit}>
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{color:"rgba(0,0,0,0.5)"}}/>}
                        placeholder="Correo electrónico"
                        //value=""
                        //onChange={}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" classname="login-form-button">
                        Me suscribo
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}


