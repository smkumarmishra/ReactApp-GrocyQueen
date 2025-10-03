import React from "react";
import Banner from "../Banner/Banner";
import ProductsCard from "../ProductsCard/ProductCard";
import Cards from "../Cards/Cards";

const CategoryPage = ({ title, bgImage, productTabs = [] }) => {
  let filterItems = productTabs.includes("All")
    ? ProductsCard
    : ProductsCard.filter((item) => productTabs.includes(item.category));

  const renderProducts = filterItems.map((product, id) => {
    return (
      <Cards
        images={product.image}
        name={product.name}
        price={product.price}
        key={id}
      />
    );
  });

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />
      <div className=" max-w-[1400px] mx-auto px-10 grid md:grid-cols-4 grid-cols-1 gap-7 py-20">
        {renderProducts}
      </div>
    </div>
  );
};

export default CategoryPage;
