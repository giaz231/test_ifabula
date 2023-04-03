import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navi = useNavigate();

  return (
    <div className="navbar bg-usee-blue">
      <div className="navbar-start">
        <div className="flex"></div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li onClick={() => navi("/")}>
              <a className="text-white hover:bg-sky-700">Soal Pseucode</a>
            </li>
            <li onClick={() => navi("/soalutama")}>
              <a className="text-white hover:bg-sky-700">Soal Utama</a>
            </li>
            <li onClick={() => navi("/soallanjutan")}>
              <a className="text-white hover:bg-sky-700">Soal Lanjutan</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
