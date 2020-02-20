import React, {useState, useEffect} from 'react';
import './MenuWebList.scss';
import { Switch,List, Button, Icon, Modal as ModalAntd, notification } from 'antd';
import Modal from '../../../modal';
import DragSortableList from 'react-drag-sortable';

const {confirm} =ModalAntd;

export default function MenuWebList(props){
  const {menu, setReloadMenuWeb} = props;

  const [listItems, setListItems]= useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  useEffect( ()=> {
      const listItemsArray = [];
      menu.forEach( item => {
        listItemsArray.push({
            content : <MenuItem item={item}/>
        })
      });
      setListItems(listItemsArray);
  },[menu]);

  const onSort = (sortedList, dropEvent) => {
      console.log(sortedList)
  }
  return (
        <div className="menu-web-list">
            <div className="menu-web-list__header">
                <Button type="primary">
                    Menú 
                </Button>
            </div>
            <div className="menu-web-list__items">
                <DragSortableList items={listItems} onSort={onSort} type="vertical"/>
            </div>
        </div>
    )
}

function MenuItem(props){
    const {item } = props;

    return (
        <List.Item
            actions={[
                <Switch defaultChecked={item.active}/>,
                <Button type="primary">
                    <Icon type="edit"/>
                </Button>,
                <Button type="danger">
                    <Icon type="delete"/>
                </Button>
            ]}
        >
            <List.Item.Meta title={item.title} description={item.url} />
        </List.Item>
    )
}