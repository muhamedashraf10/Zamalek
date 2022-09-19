import React from "react";
import "./Navbar.css";
import { FaUserAlt } from "react-icons/fa";
import logo from "../../images/zamalek-sc-logo-DBC71FD15E-see@2x.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container2">
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
            <Link to="/">
              <li>الرئيسيه</li>
            </Link>
            <Link to="/home2">
              <li>الأخبار</li>
            </Link>
            <li>تاريخ النادي</li>
            <li>جدول المباريات</li>
            <li>فريق العمل</li>
          </ul>
        </div>
      </div>
      <div className="logo">
        <div className="logo_title"> نادي الزمالك</div>
        <img src={logo}></img>
      </div>
    </nav>
  );
};

export default Navbar;
