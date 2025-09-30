import PropTypes from "prop-types";
import React from "react";

const productImageGallerySticky = ({ product }) => {
  return (
    <div className="product-large-image-wrapper product-large-image-wrapper--sticky">
      {product.discount || product.new ? (
        <div className="product-img-badges">
          {product.discount ? (
            <span className="pink">-{product.discount}%</span>
          ) : (
            ""
          )}
          {product.new ? <span className="purple">New</span> : ""}
        </div>
      ) : (
        ""
      )}
      <div className="product-sticky-image mb--10">
              <div className="product-sticky-image__single mb-10" >
                <img
                  src={process.env.PUBLIC_URL + product.image}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="product-sticky-image__single mb-10" >
                <img
                  src={process.env.PUBLIC_URL + product.image1}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="product-sticky-image__single mb-10" >
                <img
                  src={process.env.PUBLIC_URL + product.image2}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="product-sticky-image__single mb-10">
                <img
                  src={process.env.PUBLIC_URL + product.image3}
                  alt=""
                  className="img-fluid"
                />
              </div>


      </div>
    </div>
  );
};

productImageGallerySticky.propTypes = {
  product: PropTypes.object
};

export default productImageGallerySticky;
