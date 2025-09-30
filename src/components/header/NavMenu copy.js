import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import categoryData from "../../data/category.json";


import { multilanguage } from "redux-multilanguage";

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
            <Link to={process.env.PUBLIC_URL + "/Khal-Muhammadi"}>
              New Arrivals
            </Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/all-rugs"}>
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
              <li>
                <Link to={process.env.PUBLIC_URL + "/Khal-Muhammadi"}>
                Khal Muhammadi
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/checkout"}>
                Pakistani Bokhara
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                Baluchi Rugs
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                Silk Persian Rugs
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                Gabbeh Rugs
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                Afghani Barjasta
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                Beljik Rugs
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                Maliki Kilim Rugs
                </Link>
              </li>
            </ul>
          </li>



          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
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
              <li>
                <Link to={process.env.PUBLIC_URL + "/cart"}>
                Small Rugs : 3' x 5'
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/checkout"}>
                Medium Rugs : 5' x 8'
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                Large Rugs : 7' x 10'
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                Runner Rugs
                </Link>
              </li>
              
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
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
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>
                Green
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>
                  Blue
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>
                  Pink
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>
                  Multi Color
                </Link>
              </li>
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

export default multilanguage(NavMenu);
