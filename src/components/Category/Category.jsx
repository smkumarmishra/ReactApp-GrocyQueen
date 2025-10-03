import React from "react";
import Heading from "../Headings/Heading";
import FruitsVegs from "../../assets/fruits-and-veggies.png";
import MeetCat from "../../assets/meat-and-seafood.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import Fruits from "../Fruits/Fruits";

const Category = () => {
  const renderCard = category.map((card, id) => {
    return (
      <div key={id} className="flex-1 basis-[300px]">
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img
            src={card.images}
            alt="images here"
            className="absolute bottom-0"
          />
        </div>

        {/* content Part of color */}
        <div className="bg-zinc-200 py-6 px-6 rounded-xl">
          <h4 className="font-bold text-center text-2xl text-zinc-700 py-4">
            {card.title}
          </h4>
          <p className="text-xl text-zinc-700 py-4">{card.description}</p>
          {/* <Button content={"See All"} /> */}

          {/* by using react-router-dom */}

          <Link
            to={card.path}
            className="bg-gradient-to-b from-orange-400 to bg-orange-600 text-shadow-violet-200 
                        px-8 py-3 rounded-lg cursor-pointer font-bold text-lg hover:scale-105 hover:from-orange-900 transition-all duration-300"
          >
            See All's
          </Link>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="py-20 max-w-[1400px] mx-auto px-10">
        <Heading highlight="Shop" heading="by Category" />

        {/* category of list -item */}

        <div className="flex gap-10 pt-10 flex-wrap">{renderCard}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits and Vegs",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    images: FruitsVegs,
    path: "/fruits",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    images: DairyCat,
    path: "/dairy",
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    images: MeetCat,
    path: "/seafood",
  },
];
