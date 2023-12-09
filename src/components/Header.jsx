// import React from 'react'
import logo from "../../public/img/logo.png"
const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 mb-10">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-20"
              alt="Flowbite Logo"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap ">
              ポケモン図鑑
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
