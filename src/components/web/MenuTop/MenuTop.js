import React ,{useState, useEffect} from 'react'
import './MenuTop.scss';
import { Menu} from 'antd';
import {Link} from 'react-router-dom';
import {getMenuApi} from './../../../api/menu'
import Logo from '../../../assets/img/png/logo-white.png'


export default function MenuTop() {
  const [ menuData, setMenuData]= useState([]);

  useEffect ( ()=> {
    getMenuApi().then( response => {
      const arrayMenu = [];
      response.menus.forEach( item => {
          item.active && arrayMenu.push(item);
      });
      setMenuData(arrayMenu);
    });
},[])
    return (
      <Menu className="menu-top-web" mode="horizontal">
          <Menu.Item className="menu-top-web__logo">
            <Link to={"/"}>
                <img src={Logo} alt="logo"/> 
            </Link>
          </Menu.Item>
          {
            menuData.map(item => {
              const external = item.url.indexOf("http") > -1 ? true: false;

              if(external){
                return (
                <Menu.Item key= {item._id} className="menu-top-web__item">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                </Menu.Item>
                )
              };
              return(
                <Menu.Item key= {item._id} className="menu-top-web__item">
                  <Link to={item.url}>{item.title}</Link>
                </Menu.Item>
              )
            })
          }
        
          <div>
              social media
          </div>
      </Menu>
    )
} 