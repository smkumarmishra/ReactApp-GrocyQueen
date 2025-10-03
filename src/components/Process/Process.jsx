import React from "react";
import Heading from "../Headings/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
  const renderSteps = steps.map((item, id) => {
    return (
      <div
       id="process"
        key={id}
        className={`flex-1 basis-[250px] md:pt-26  ${
          item.id % 2 === 0 ? "md:-mt-80" : " "
        }`}
      >
        <span className=" flex mx-auto  justify-center items-center outline-[2px] outline-zinc-800 outline-offset-8 outline-dotted rounded-full w-15 h-15 text-8xl bg-zinc-800 text-white">
          {item.number}
        </span>
        <div className="flex items-center gap-x-5 mt-5">
          <span className="flex rounded-full p-4 text-4xl bg-gradient-to-b from-orange-400 to-orange-600 text-white w-15 h-15 justify-center items-center ">
            {item.icon}
          </span>

          <div className="flex-1">
            <h4 className="text-zinc-800 text-2xl font-bold"> {item.title} </h4>
            <p className="text-zinc-600 mt-2"> {item.para} </p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>

        {/* rendering here */}
        <div className="flex flex-wrap gap-y-17 md:mt-20 mt-8 items-center justify-center ">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
