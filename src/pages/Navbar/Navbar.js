import React from "react";
import "./Navbar.css";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="">
      <div className="navs">
        <div className="nav1">
          <div className="btn-input">
            <button className="bttn">
              <span>تسجيل الدخول</span>
              <span className="icon">
                <FaUserAlt />
              </span>
            </button>
            <input placeholder="Search" className="input" />
          </div>
          <div className="social-icon">
            <FaUserAlt />
            <FaUserAlt />
            <FaUserAlt />
            <FaUserAlt />
          </div>
        </div>
        <div className="nav2">
          <ul className="lists">
            <li>الرئيسيه</li>
            <li>الرئيسيه</li>
            <li>الرئيسيه</li>
            <li>الرئيسيه</li>
            <li>الرئيسيه</li>
          </ul>
        </div>
      </div>
      <div className="logo">zamalek</div>
    </nav>
  );
};

export default Navbar;
