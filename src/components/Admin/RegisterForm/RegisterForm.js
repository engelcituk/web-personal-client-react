import React from 'react'
import './RegisterForm.scss';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';


export default function RegisterForm(){
    
    return (
        <Form className="register-form">
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
                    className="register-form__input"
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
                    className="register-form__input"
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
                    name="repeatPassword"
                    placeholder="Repetir la contraseña"
                    className="register-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicie">
                    He leído y acepto las políticas de privacidad
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    )
    
}