import React, { useEffect, useState } from "react";
import Navbar from "./Main/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode";
import Header from "./Main/Header";
import NavbarMd from "./Main/NavbarMd";

const index = () => {
  const changpage = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("MainToken")) {
      changpage("/login");
    }
    const token: any = localStorage.getItem("MainToken");
    const decodedToken: JwtPayload = jwtDecode(token);
    if (decodedToken.exp && decodedToken.exp < Date.now() / 1000) {
      // Token đã hết hạn, xử lý đăng xuất
      console.log("Token đã hết hạn. Đăng xuất người dùng.");
      // Thực hiện hàm đăng xuất ở đây
      localStorage.clear();
      changpage("/login");
    } else {
      // Token còn hiệu lực, bạn có thể thực hiện các hành động khác
      console.log("Token hiệu lực.");
      return;
    }
  }, []);
  const [showMenu, setShowMenu] =useState<boolean>(false)
  
  return (
    <div className="flex justify-between flex-wrap w-full h-screen overflow-auto  ">
      
      <Navbar/>
     { showMenu && <NavbarMd showMenu={showMenu} setShowMenu={setShowMenu}/>}
      <div className="w-full  lg:w-10/12 bg-gray-100 flex flex-wrap flex-col relative">
        <Header setShowMenu={setShowMenu} showMenu={showMenu}/>
        <Outlet />
      </div>
    </div>
  );
};

export default index;
