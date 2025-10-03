import React from "react";
import Heading from "../Headings/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";

import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((item, id) => {
    return (
      <div
        key={id}
        className="flex md:flex-row-reverse  items-center md:gap-4 gap-10 "
      >
        <div>
          <span className="flex justify-center items-center bg-gradient-to-b from-orange-500 to-orange-600 w-15 h-15 rounded-full text-3xl text-white">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h4 className="text-zinc-800 text-3xl font-bold my-4">
            {item.title}
          </h4>
          <p className="text-zinc-600">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = value.slice(2).map((item, id) => {
    return (
      <div key={id} className="flex items-center  md:gap-4 gap-10 ">
        <div>
          <span className="flex justify-center items-center bg-gradient-to-b from-orange-500 to-orange-600 w-15 h-15 rounded-full text-3xl text-white">
            {item.icon}
          </span>
        </div>
        <div className="text-left">
          <h4 className="text-zinc-800 text-3xl font-bold my-4">
            {item.title}
          </h4>
          <p className="text-zinc-600">{item.para}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] m-auto p-20">
        <Heading highlight="Our" heading="Values" />

        <div className="flex md:flex-row flex-col md:gap-8 gap-16 mt-10">
          {/* left div */}

          <div className="md:min-h-100 gap-10 flex flex-col justify-between">
            {leftValues}
          </div>
          {/* center Div image */}
          <div className="md:flex w-1/2 hidden">
            <img src={Basket} alt="img" />
          </div>
          {/* right div */}
          <div className="md:min-h-100 gap-10 flex flex-col justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaSeedling />,
  },
];
