import React, {useState, useEffect} from 'react';
import './MenuWebList.scss';



export default function MenuWebList(props){
  const {menu, setReloadMenuWeb} = props;

  console.log(menu)
  return (
        <div className="menu-web-list">
            <h1>Menu web List..</h1>
            {
                menu.map( item => (
                    <p>{item.title}</p>
                )) 
            }
        </div>
    )
}