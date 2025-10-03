import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgSeafood from "../../assets/seafood-banner.jpg";

const SeaFood = () => {
  return (
    <div>
      <CategoryPage
        title="Meet & SeaFood"
        bgImage={BgSeafood}
        productTabs={["SeaFood"]}
      />
    </div>
  );
};

export default SeaFood;
