import React from 'react'
import './MyInfo.scss';
import Logo from '../../../../assets/img/png/logo-white.png';
import SocialLinks from '../../SocialLinks';

export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={Logo} alt="Cituk Caamal"/>
            <h4>
                Disfruto crear cosas desde cero y que estos solucionen un problema en concreto. 
            </h4>
            <SocialLinks/>
        </div>
    )
}
