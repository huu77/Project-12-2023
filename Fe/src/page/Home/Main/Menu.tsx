import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, ContactsOutlined,AppstoreOutlined, UserOutlined} from "@ant-design/icons";

const ChildrenNavbar = () => {
   
    const [showHomeMenu, setShowHomeMenu] = useState(true);
    const toggleHomeMenu = () => {
        setShowHomeMenu(!showHomeMenu);
      };
  return (
      
 
        <div className="flex flex-col space-y-4">
          <div className="thd_itemMenu" onClick={toggleHomeMenu}>
            <HomeOutlined className="mr-2" />
            Home
          </div>
          {showHomeMenu && (
            <>
              <Link to="/home/product" className="thd_itemSubMenu ml-5">
                <AppstoreOutlined className="mr-2" />
                Product
              </Link>
              <Link to="/user" className="thd_itemSubMenu ml-5">
                <UserOutlined className="mr-2" />
                User
              </Link>
            </>
          )}
          <Link to="#" className="thd_itemMenu">
            <InfoCircleOutlined className="mr-2" />
            About
          </Link>
          <Link to="#" className="thd_itemMenu">
            <ContactsOutlined className="mr-2" />
            Contact
          </Link>
        </div>
  )
}

export default ChildrenNavbar
