import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../button/Button";

const Cards = ({ images, name, price }) => {
  return (
    <div className="bg-zinc-300 px-3 py-2 rounded-lg">
      {/* icon div */}
      <div className="flex justify-between items-center">
        <span className="text-zinc-400 text-2xl">
          <FaHeart />
        </span>
        <button
          className="bg-gradient-to-b from-orange-400 to bg-orange-600 text-shadow-violet-200 
      px-3 py-1 text-white rounded-lg cursor-pointer font-bold text-lg hover:scale-105 hover:from-orange-900 transition-all duration-300"
        >
          {" "}
          <FaPlus />{" "}
        </button>
      </div>

      {/* image section */}

      <div className="mt-2 w-full h-55"><img src={images} alt="images"  className="w-full h-full object-contain m-auto" /></div>
      {/* include all text here */}
      <div className="text-center">
        <h4 className="font-semibold text-2xl "> {name} </h4>
        <p className="font-bold text-xl my-3"> &#8377;{price.toFixed(2,0)} </p>
        <Button content="Show"/>
      </div>
    </div>
  );
};

export default Cards;
