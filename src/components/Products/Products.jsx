import React, { useState } from "react";
import Heading from "../Headings/Heading";
import Cards from "../Cards/Cards";
import ProductCard from "../ProductsCard/ProductCard";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const productTabs = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTabs] = useState("All");

  const filterCategory =
    activeTab === "All"
      ? ProductCard
      : ProductCard.filter((item) => item.category === activeTab);

  const renderCards = filterCategory.slice(0, 8).map((list, key) => {
    return (
      <Cards
        key={key}
        images={list.image}
        name={list.name}
        price={list.price}
      />
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] m-auto p-20 py-10">
        <Heading highlight="Our" heading="Products" />

        {/* products tab's */}

        <div className="flex flex-wrap gap-5 md:gap-2 justify-center mt-4">
          {productTabs.map((tabs, index) => {
            return (
              <button
                className={`${
                  activeTab === tabs
                    ? "bg-gradient-to-b from-orange-400 to-orange-600 text-white"
                    : "bg-zinc-200"
                } px-5 py-1.5 cursor-pointer text-[15px] capitalize rounded-xl font-semibold`}
                key={index}
                onClick={() => setActiveTabs(tabs)}
              >
                {tabs}
              </button>
            );
          })}
        </div>
        {/* product listing */}

        <div className="grid grid-cols-1 gap-15 md:grid-cols-4 md:gap-10 mt-15">{renderCards}</div>

        <div className="mt-20 w-fit mx-auto">
          {" "}
          {/* <Button content="View All" />{" "} */}

          <Link
            to='/allProducts'
            className="bg-gradient-to-b from-orange-400 to bg-orange-600 text-shadow-violet-200 
                        px-8 py-3 rounded-lg cursor-pointer font-bold text-lg hover:scale-105 hover:from-orange-900 transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
