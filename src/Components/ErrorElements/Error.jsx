import React from "react";

const Error = () => {
  return (
    <div className="w-full">
      <div className=" md:w-7/12 lg:w-6/12 h-96 md:h-[600] lg:h-[650px] mx-auto flex items-center justify-center">
        <div className="text-center">
          <img
            className="mb-6 mx-aut"
            src="/src/assets/Resources/notFound.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
