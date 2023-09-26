import React from "react";

const Banner = ({ handleSearch }) => {
  return (
    <div className="flex justify-center md:items-center lg:items-center md:h-80 lg:h-80 ">
      <div className="bg-[url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2NBwfDCkiqEsYvwH7XU4DncCodQZZ34f3ILeWty0nbKGW4r4MPa7atIfU)] w-full h-[420px] md:h-[500px] lg:h-[600px] absolute top-0 flex  justify-center  bg-cover bg-no-repeat items-center opacity-10  "></div>
      <div className=" text-center z-30 ">
        <h1 className=" text-2xl md:text-4xl w-72 md:w-full lg:w-full lg:text-5xl font-bold">
          I Grow By Helping People In Need
        </h1>

        <div className=" py-2  px-3 mt-6 relative rounded bg-black inline-block">
          <input
            onChange={handleSearch}
            name="search"
            className="outline-none md:w-80 lg:w-96  text-white bg-transparent"
            type="text"
            placeholder="Search here..."
          />
          <button
            type="button"
            className="bg-rose-500 rounded-r top-0 right-0 absolute  text-white py-2 px-4"
          >
            Search
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
