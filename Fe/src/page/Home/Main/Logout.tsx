
import {  useNavigate } from 'react-router-dom';
import { LogoutOutlined } from "@ant-design/icons";

const Logout = () => {
    const changpage = useNavigate();
    const handleLogout = () => {
      localStorage.clear();
      changpage("/login");
    };
  return (
    <div>
        <button onClick={handleLogout} className="thd_itemMenu mt-auto" >
          <LogoutOutlined className="mr-2" />
          Logout
        </button>
        </div>
  )
}

export default Logout
