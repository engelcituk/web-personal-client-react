import React ,{useState, useEffect} from 'react'
import './MenuTop.scss';
import { Menu} from 'antd';
import {Link} from 'react-router-dom';


export default function MenuTop() {
   
    return (
      <Menu className="menu-top" mode="horizontal">
          <Menu.Item className="menu-top__logo">
          logo...
          </Menu.Item>
          <Menu.Item className="menu-top__item">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item className="menu-top__item">
            <Link to="contact">Contacto</Link>
          </Menu.Item>
          <div>
              social media
          </div>
      </Menu>
    )
} 