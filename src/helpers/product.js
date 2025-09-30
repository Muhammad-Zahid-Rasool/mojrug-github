
import categoryData from "../data/category.json";
import tagData from "../data/category.json";
import sizeData from "../data/size.json";
import colorData from "../data/color.json";

// get products
export const getProducts = (products, category, type, limit) => {
  const finalProducts = category
    ? products.filter(single => single.category=== category) 
    : products;

  if (type && type === "new") {
    const newProducts = finalProducts.filter(single => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }
  if (type && type === "bestSeller") {
    return finalProducts
      .sort((a, b) => {
        return b.saleCount - a.saleCount;
      })
      .slice(0, limit ? limit : finalProducts.length);
  }
  if (type && type === "saleItems") {
    const saleItems = finalProducts.filter(
      single => single.discount && single.discount > 0
    );
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }
  return finalProducts.slice(0, limit ? limit : finalProducts.length);
};

// get product discount price
export const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : null;
};

// get product cart quantity
export const getProductCartQuantity = (cartItems, product, color, size) => {
  let productInCart = cartItems.filter(
    single =>
      single.id === product.id &&
      (single.selectedProductColor
        ? single.selectedProductColor === color
        : true) &&
      (single.selectedProductSize ? single.selectedProductSize === size : true)
  )[0];
  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.filter(
        single =>
          single.id === product.id &&
          single.selectedProductColor === color &&
          single.selectedProductSize === size
      )[0].quantity;
    } else {
      return cartItems.filter(single => product.id === single.id)[0].quantity;
    }
  } else {
    return 0;
  }
};

//get products based on category or color or size or tag
//  MonRug: products = Passing All Products here.
//  MonRug: sortType = category or color or size or tag or filterSort (Total 5 sortTypes)
//  MonRug: sortValue = default or priceHighToLow or priceLowToHigh (Total 3 sortValues BUT having Dynamic values say Bokhara, 4x6 size ,green color etc also sortValues)
export const getSortedProducts = (products, sortType, sortValue) => {
  if (products && sortType && sortValue) {
    if (sortType === "category") {
      return products.filter(single => single.category=== sortValue);                                                                  // [0] means first elemnet of the filtered array. 
    }
    if (sortType === "tag") {
      return products.filter(single => single.tag=== sortValue);                                                                  // [0] means first elemnet of the filtered array. 
    }
    if (sortType === "new") {
      // Here No Nested filter functions as "new" attribute is Not an array in Product.json
      return products.filter(single => single.new); // single.new means single.new == true
    }
    if (sortType === "color") {
      return products.filter(single => single.color=== sortValue);   
    }
    if (sortType === "size") {
      return products.filter(single => single.size=== sortValue);   
    }
    if (sortType === "filterSort") {
      let sortProducts = [...products];
      if (sortValue === "default") {
        return sortProducts;
      }
      if (sortValue === "priceHighToLow") {
        return sortProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sortValue === "priceLowToHigh") {
        return sortProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }
  }
  return products;
};

// get individual element
const getIndividualItemArray = array => {
  let individualItemArray = array.filter(function(v, i, self) {
    return i === self.indexOf(v);
  });
  return individualItemArray;
};
 
// get individual categories
export const getIndividualCategories = () => {
  let productCategories = [];
  categoryData.map(single => {
    return  productCategories.push(single.name); // returns the modified productCategories array.
        });
  return productCategories;
};
/* More Consise code (Return an array having All 08 Rugs Categories.)
export const getIndividualCategories = () => {
  return categoryData.map((single) => single.name);
};

*/




// get individual tags
export const getIndividualTags = () => {
  let productTags = [];
  tagData.map(single => {
    return productTags.push(single.name);
        });
  return productTags;
};

// get individual colors
export const getIndividualColors = () => {
  let productColors = [];
  colorData.map(single => {
    return productColors.push(single.value);
        });
  return productColors;
};

// get individual sizes
export const getProductsIndividualSizes =() => {
  let productSizes = [];
  sizeData.map(single => {
    return productSizes.push(single.name);
        });
  return productSizes;
};

// get product individual sizes
export const getIndividualSizes = product => {
  let productSizes = [];
  product.variation &&
    product.variation.map(singleVariation => {
      return (
        singleVariation.size &&
        singleVariation.size.map(singleSize => {
          return productSizes.push(singleSize.name);
        })
      );
    });
  const individualSizes = getIndividualItemArray(productSizes);
  return individualSizes;
};

export const setActiveSort = e => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button"
  );
  filterButtons.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const setActiveLayout = e => {
  const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
  gridSwitchBtn.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const toggleShopTopFilter = e => {
  const shopTopFilterWrapper = document.querySelector(
    "#product-filter-wrapper"
  );
  shopTopFilterWrapper.classList.toggle("active");
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height =
      shopTopFilterWrapper.scrollHeight + "px";
  }
  e.currentTarget.classList.toggle("active");
};
