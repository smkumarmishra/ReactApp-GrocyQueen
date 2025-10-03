import React from "react";
import Button from "../button/Button";
import bgDiscount from "../../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-right bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${bgDiscount})` }}
    >
      <div className="md:py-13 py-20 max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col md:gap-5 gap-10">
        <span className="md:text-8xl text-4xl text-orange-500 transform md:-rotate-90 h-fit md:self-center font-bold">
          20%
        </span>
        <div className="max-w-[700px]">
          <h3 className="text-3xl text-zinc-900 font-bold pt-4 ">
            First Order Discount{" "}
          </h3>
          <p className="text-zinc-600 text-xl py-4">
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your first purchase. Fast delivery
            and quality guaranteed.
          </p>
          <Button content="Get a Discount" className="inline-block" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
