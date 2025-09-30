import React from "react";
import { Link } from "react-router-dom";
import categoryData from "../../../data/category.json";
import sizeData from "../../../data/size.json";
import colorData from "../../../data/color.json";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/new-arrivals"}>
            New Arrivals
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/all-rugs/ "}>
          All Rugs
          </Link>
          <ul className="sub-menu">
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
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/all-sizes/ "}>
          Size
          </Link>
          <ul className="sub-menu">
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
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/all-colors/ "}>
          Color
          </Link>
          <ul className="sub-menu">
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
  );
};


export default MobileNavMenu;
