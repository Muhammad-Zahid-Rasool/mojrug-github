// Task Left on App.js
//Check Suspense is Using are NOT -----


import React, { Suspense } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

// home pages
import Home from "./pages/home/Home";
// shop pages
import ShopGridStandard  from "./pages/shop/ShopGridStandard";
import AllRugs  from "./pages/shop/AllRugs";
import AllSizes  from "./pages/shop/AllSizes";
import AllColors  from "./pages/shop/AllColors";
import AllNew  from "./pages/shop/AllNew";

// product pages
import Product  from "./pages/shop-product/ProductSticky";
// other pages
import About  from "./pages/other/About";
import Contact from "./pages/other/Contact";
import MyAccount from "./pages/other/MyAccount";
import LoginRegister from "./pages/other/LoginRegister";

import Cart from "./pages/other/Cart";
import Wishlist from "./pages/other/Wishlist";
import Compare from "./pages/other/Compare";
import Checkout from "./pages/other/Checkout";
import NotFound from "./pages/other/NotFound";


const App = () => {
  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={Home}
                />

                {/* Homepages */}
                <Route
                  path={process.env.PUBLIC_URL + "/home"}
                  component={Home}
                />

                {/* Shop pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/shop-grid-standard"}
                  component={ShopGridStandard}
                />
              

                {/* New Arrivals */}
                <Route
                  path={process.env.PUBLIC_URL + "/new-arrivals"}
                  component={AllNew}
                />

                                     {/* Shop pages */}
        {/* All Rugs Shop pages By Category,Size or Color in Top Menu (NavMenu.js) */}

                 {/* All Rugs */}
                <Route
                  path={process.env.PUBLIC_URL + "/all-rugs/:id"}
                  render={(routeProps) => (
                    <AllRugs {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                {/* All Sizes */}
                <Route
                  path={process.env.PUBLIC_URL + "/all-sizes/:id"}
                  render={(routeProps) => (
                    <AllSizes {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                {/* NOTE: react-router-dom v6 New Code is as;
  
                    <Route
                       path={`${process.env.PUBLIC_URL}/all-sizes/:id`}
                       element={<AllSizes />}
                      />
                 */}
                {/* All Colors */}
                <Route
                  path={process.env.PUBLIC_URL + "/all-colors/:id"}
                  render={(routeProps) => (
                    <AllColors {...routeProps} key={routeProps.match.params.id} />
                  )}
                />




                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  render={(routeProps) => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/compare"}
                  component={Compare}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};
export default App;
