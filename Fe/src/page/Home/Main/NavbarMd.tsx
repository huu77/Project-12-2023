
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, ContactsOutlined, LogoutOutlined ,AppstoreOutlined, UserOutlined,CloseCircleTwoTone } from "@ant-design/icons";
import Menu from './Menu';
import Logout from './Logout';


interface TypeDrop{
    setShowMenu:any;
    showMenu:boolean;
}
const NavbarMd:React.FC<TypeDrop> = ({setShowMenu,showMenu}) => {
console.log(showMenu);



  return (
    <div className={` thd_navbarMd }`}>
       <div className="flex flex-col items-start">
        {/* Logo hoặc tên ứng dụng */}
        <div   className="text-white text-lg font-bold mb-4">
          <span role="img" aria-label="app-logo">
            🚀
          </span>
          Dashboard
          <CloseCircleTwoTone className='absolute top-0 right-0' onClick={()=>setShowMenu(!showMenu)}/>
        </div>
        
      <Menu/>

      </div>

      <Logout/>
    </div>
  )
}

export default NavbarMd
