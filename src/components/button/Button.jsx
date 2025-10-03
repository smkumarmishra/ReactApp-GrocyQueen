import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className="bg-gradient-to-b from-orange-400 to bg-orange-600 text-shadow-violet-200 
      px-8 py-3 rounded-lg cursor-pointer font-bold text-lg hover:scale-105 hover:from-orange-900 transition-all duration-300 
      
      "
      >
        {props.content}
      </button>
    </>
  );
};

export default Button;
