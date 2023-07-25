
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu,Layout } from 'antd';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('Navigation One', '1', <MailOutlined />),
    getItem('Navigation Two', '2', <CalendarOutlined />),
    getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
      getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Navigation Three', 'sub2', <SettingOutlined />, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
    ]),
    getItem(
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>,
      'link',
      <LinkOutlined />,
    ),
  ];
 const SideBar = () =>{

    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
   
  return (
    <Sider
    style={{ width: 256 }}
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    
   <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
       
        items={items}
        />
    
   </Sider> 
  )
}

export default SideBar ;