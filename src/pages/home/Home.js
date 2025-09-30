import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import SectionTitle from "../../components/section-title/SectionTitle";
import CategoryThreeSlider from "../../wrappers/category/CategoryThreeSlider";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
import TabProduct from "../../wrappers/product/TabProduct";
//import TabProductFive from "../../wrappers/product/TabProductFive";

const HomeFashionTwo = () => {
  return (
    <Fragment>
     <MetaTags>
        <title>MojRug | Online Handmade Quality Rugs on Cheap Price.</title>
        <meta
          name="description"
          content="MojRug - Online Handmade Quality Rugs on Cheap Price."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider ---- No Store --- Direct useEffect hook to get All Slider data */}
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        {/* feature icon */}
        <FeatureIconFour
          spaceTopClass="pt-10"
          spaceBottomClass="pb-90"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
        />      
        {/* category ---- No Store --- Direct useEffect hook to get All categories data */}
        <SectionTitle
          titleText="Rug Collections"
          positionClass="text-center"
          spaceClass="mb-55"
        />
        <CategoryThreeSlider spaceTopClass="pt-05" spaceBottomClass="pb-95" />

        {/* tab product --- Here  Redux Store Working --- getAllProducts and put in store in index.js*/}
        <TabProduct spaceBottomClass="pb-60" category="" />

      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;
