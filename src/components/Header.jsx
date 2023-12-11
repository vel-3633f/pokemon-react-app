// import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../../public/img/logo.png";
import title from "../../public/img/title.jpg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="bg-white w-screen border-gray-200 py-5 mb-5 flex flex-wrap justify-center items-center">
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer"
        >
          <img src={logo} className="mr-3 h-20" alt="Flowbite Logo" />
          <img src={title} alt="title" className="h-16" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
