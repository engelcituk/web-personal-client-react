import React, {useState} from 'react'
import './RegisterForm.scss';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import {minLengthValidation, emailValidation} from '../../../utils/FormValidation';


export default function RegisterForm(){
    const [inputs, setInputs]  = useState({
        email: "",
        password: "",
        repeatPassword:"",
        privacyPolicy: false
    });

    const [formValid, setFormValid]  = useState({
        email: false,
        password: false,
        repeatPassword:false,
        privacyPolicy: false
    });

const changeForm = e => {
        if(e.target.name === "privacyPolicy"){
            setInputs({
                ...inputs,
                [e.target.name]:e.target.checked
            })
        }else{
            setInputs({
                ...inputs,
                [e.target.name]:e.target.value
            })
        } 
}
const inputValidation = e => {
        const {type,name} = e.target;
    if(type==="email"){
        setFormValid({
            ...formValid,
            [name]:emailValidation(e.target)
        });
    }
    if(type==="password"){
        setFormValid({
            ...formValid,
            [name]:minLengthValidation(e.target,6)
        });
    }
    if(type==="checkbox"){
        setFormValid({
            ...formValid,
            [name]:e.target.checked
        });
    }
}
    const register = (e) => {
        e.preventDefault();
        const {email, password, repeatPassword, privacyPolicy} = formValid;
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;
        const privacyPolicVal = inputs.privacyPolicy;


        if(!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicVal){
            notification['error']({
                message: "Todos los campos son obligatorios"
            })
        }else {
            if(passwordVal !==repeatPasswordVal){
                notification['error']({
                    message: "Las contraseñas no coinciden"
                })
            }else {
                
            }
        }

    }
    return (
        <Form className="register-form" onSubmit={register} onChange={changeForm}>
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
                    onChange={inputValidation}
                    value={inputs.email}
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
                    onChange={inputValidation}
                    value={inputs.password}

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
                    onChange={inputValidation}
                    value={inputs.repeatPassword}

                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy"
                    onChange={inputValidation}
                    checked={inputs.privacyPolicy}
                >
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