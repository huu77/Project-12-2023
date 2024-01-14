import React, { useMemo, useState } from "react";
import { Layout, Menu, Tooltip } from "antd";
import { UserOutlined ,MenuFoldOutlined ,MenuUnfoldOutlined} from "@ant-design/icons";
interface TypeDropHeader{
  showMenu:boolean;
  setShowMenu:any;
}
const Header:React.FC<TypeDropHeader> = ({showMenu,setShowMenu}) => {
    const [arrow, setArrow] = useState<'Hide'|'Show'>('Show');

    const mergedArrow = useMemo(() => {
      if (arrow === 'Hide') {
        return false;
      }
  
      if (arrow === 'Show') {
        return true;
      }
  
      return {
        pointAtCenter: true,
      };
    }, [arrow]);

 

  return (
    <div className="bg-white pr-5 flex justify-center items-center md:pr-0">
      <div onClick={()=>setShowMenu(!showMenu)}>

      {showMenu?<MenuUnfoldOutlined className="ml-10 flex lg:hidden"/>:<MenuFoldOutlined className="ml-10 flex lg:hidden"/>}
      </div>
      
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
        className="w-full flex justify-end items-center"
      >
     
 
 
        <Tooltip placement="bottom" title={'Thanh Huu'} arrow={mergedArrow}>
        <Menu.Item
            key="2"
            icon={<UserOutlined />}
            className="w-20 text-center"
       
          />
          </Tooltip>
        
      </Menu>
    </div>
  );
};

export default Header;
