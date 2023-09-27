import React from "react";
import ErrorImg from "../../assets/Resources/notFound.png"
const Error = () => {
  return (
    <div className="w-full">
      <div className=" md:w-7/12 lg:w-6/12 h-96 md:h-[600] lg:h-[650px] mx-auto flex items-center justify-center">
        <div className="text-center">
          <img
            className="mb-6 mx-aut"
            src={ErrorImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
