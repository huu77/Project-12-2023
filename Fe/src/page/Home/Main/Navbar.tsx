// Navbar.js

import { Link} from 'react-router-dom';
import Menu from './Menu';
import Logout from './Logout';

const Navbar = () => {
    
  return (
    <nav className={`thd_navbar `}>
      <div className="flex flex-col items-start">
        {/* Logo hoặc tên ứng dụng */}
        <Link to="/" className="text-white text-lg font-bold mb-4">
          <span role="img" aria-label="app-logo">
            🚀
          </span>
          Dashboard
        </Link>
        
      <Menu/>

      </div>

       <Logout/>
    </nav>
  );
}

export default Navbar;
