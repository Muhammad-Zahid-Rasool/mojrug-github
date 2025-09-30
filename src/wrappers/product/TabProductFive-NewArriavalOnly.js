import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import ProductGridTwo from "./ProductGridTwo";

const TabProductFive = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass
}) => {
  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
                <ProductGridTwo
                  category={category}
                  type="new"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
        </div>
        <div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shop-grid-standard"}
          >
            VIEW MORE PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
};

TabProductFive.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductFive;
