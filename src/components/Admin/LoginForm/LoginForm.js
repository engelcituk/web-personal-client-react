import React from 'react'
import './LoginForm.scss';
import { Form, Icon, Input, Button, notification } from 'antd';
/*import { minLengthValidation, emailValidation } from '../../../utils/FormValidation';
import { signUpApi } from '../../../api/user'; */

export default function LoginForm() {
    return (
        <Form className="login-form">
            <Form.Item>
                <Input
                    prefix=
                        {
                            <Icon
                                type="user"
                                style={{color:"rgba(0,0,0,.5)"}}
                            />
                        }
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix=
                        {
                            <Icon
                                type="lock"
                                style={{color:"rgba(0,0,0,.5)"}}
                            />
                        }
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="login-form__button">
                    Ingresar
                </Button>
            </Form.Item>
        </Form>
    )
}