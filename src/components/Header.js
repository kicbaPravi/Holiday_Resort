import React from "react";
import style from "../sass/_layout.module.scss";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.Logo}>
        <Link to="/">
          <img src={Logo} alt="logo" className={style.logo} />
        </Link>
      </div>
      <div className={style.menu}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
