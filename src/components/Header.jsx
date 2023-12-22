// import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../../public/img/logoImg.png";
import searchLogo from "../../public/img/searchLogo.svg";
import title from "../../public/img/title.jpg";
import { createPortal } from "react-dom";
import { useState } from "react";
import SearchMordal from "./SearchMordal";

const ModalPortal = ({ children }) => {
  const containerStart = document.querySelector("#start");
  return createPortal(children, containerStart);
};

const Header = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="bg-white w-screen border-gray-200 px-4 py-3 flex flex-wrap justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer h-8 sm:h-16"
          >
            <img src={logo} className="mr-3 h-full" alt="Flowbite Logo" />
            <img src={title} alt="title" className="h-full" />
          </div>
          <div onClick={() => setModalOpen(true)} className="cursor-pointer sm:mr-5">
            <img src={searchLogo} alt="searchLogo" className="w-5 sm:w-10 sm:h-10" />
            <p className="text-xs text-center">検索</p>
          </div>
        </nav>
      </header>
      <div id="start"></div>
      {modalOpen && (
        <ModalPortal>
          <SearchMordal
            handleCloseClick={() => {
              setModalOpen(false);
              console.log(modalOpen);
            }}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default Header;
