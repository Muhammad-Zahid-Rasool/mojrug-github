import PropTypes from "prop-types";
import React from "react";



const HeaderTop = ({
 borderStyle
}) => {
  return (
    <div
      className={`header-top-wap ${
        borderStyle === "fluid-border" ? "border-bottom" : ""
      }`}
    >
  
      <div className="header-offer">
        <p>
          Free delivery on order over 200
          
        </p>
      </div>
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string
};


export default HeaderTop;
