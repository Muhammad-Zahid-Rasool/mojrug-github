import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import categoryData from "../../data/category.json";
import sizeData from "../../data/size.json";
import colorData from "../../data/color.json";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/new-arrivals"}>
              New Arrivals
            </Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/all-rugs/ "}> 
              All Rugs
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link> 
            <ul className="submenu">
            {categoryData &&
                categoryData.map((data, key) => {
                  return (
                    <li>
                      <Link to={process.env.PUBLIC_URL + data.link}>{data.name} Rugs</Link>
                    </li>
                  );
                })}
            </ul>
          </li>



          <li>
            <Link to={process.env.PUBLIC_URL + "/all-sizes/ "}>
              Size
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link> 
            <ul className="submenu">
            {sizeData &&
                sizeData.map((data, key) => {
                  return (
                    <li>
                      <Link to={process.env.PUBLIC_URL + data.link}>{data.name} Rugs</Link>
                    </li>
                  );
                })}
            </ul>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/all-colors/ "}>
              Color
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link> 
            <ul className="submenu">
            {colorData &&
                colorData.map((data, key) => {
                  return (
                    <li>
                      <Link to={process.env.PUBLIC_URL + data.link}>{data.name} Rugs</Link>
                    </li>
                  );
                })}
            </ul>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
}; 

export default NavMenu;
