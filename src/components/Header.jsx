// import React from 'react'
import logo from "../../public/img/logo.png"
import title from "../../public/img/title.jpg"

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 lg:px-6 py-5 mb-5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
          <a href="#" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-20"
              alt="Flowbite Logo"
            />
            <img src={title} alt="title" className="h-16"/>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
