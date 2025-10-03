import React from "react";

const Heading = (props) => {
  return (
    <div className="mx-auto w-fit ">
      <h2 className="md:text-5xl text-[25px] font-bold">
        {" "}
        <span className="text-orange-400">{props.highlight}</span>{" "}
        {props.heading}
      </h2>
      <div className="w-32 h-1 bg-orange-400 md:mt-5 mt-2 ml-auto"></div>
    </div>
  );
};

export default Heading;
