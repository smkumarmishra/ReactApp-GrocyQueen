import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../button/Button";

function Hero() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center min-h-screen  mt-5 md:pt-1 pt-10 ">
        {/* hero content */}
        <div className="flex-1">
          <span className="md:text-[27px] text-[20px] font-bold bg-orange-100 text-orange-400 px-8  py-2   rounded-full ">
            Export Best Quality.....
          </span>
          <h1 className="md:text-7xl/20 text-3xl/10 font-bold mt-2">
            Testy Organic <span className="text-orange-400">"Fruits"</span>&{" "}
            <span className="text-green-800">"Veges"</span> <br /> in your city
          </h1>

          <p className="text-zinc-700 text-lg max-w-[530px] my-3">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop Now" />
        </div>
        {/* hero Images */}
        <div className="flex-1">
          <img src={Grocery} alt="heroImages" className="cursor-grabbing" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
