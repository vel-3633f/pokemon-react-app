// import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../../public/img/logoImg.png";
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
    <header>
      <nav className="bg-white w-screen border-gray-200 py-3 flex flex-wrap justify-center items-center">
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer h-10 sm:h-16"
        >
          <img src={logo} className="mr-3 h-full" alt="Flowbite Logo" />
          <img src={title} alt="title" className="h-full" />
        </div>
        <div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            disabled={modalOpen}
            className="w-10 h-10  bg-blue-400 text-2xl text-white font-semibold rounded-full hover:bg-blue-500"
          >
            +
          </button>
          {modalOpen && (
            <ModalPortal>
              <SearchMordal handleCloseClick={() => setModalOpen(false)} />
            </ModalPortal>
          )}
          <div id="start"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
