import React from "react";
import { Link } from "react-router-dom";

const DonatePrice = ({ buttonData }) => {
  const {
    picture,
    description,
    price,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = buttonData;

  return (
    <div className="w-full">
      <div>
        <div
          style={{ background: card_bg_color }}
          className="flex flex-col  md:flex-col lg:flex-row gap-6 rounded-lg items-center"
        >
          <img
            className="rounded-b-lg md:w-full lg:w-fit w-full"
            src={picture}
            alt=""
          />
          <div>
            <p
              style={{
                background: category_bg_color,
                color: text_button_bg_color,
              }}
              className="font-bold inline-block px-3 rounded-sm mb-2"
            >
              {category}
            </p>
            <p className="font-bold mb-4 text-xl">{title}</p>
            <p
              style={{ color: text_button_bg_color }}
              className="font-semibold"
            >
              {" "}
              ${price}.00
            </p>
            <Link to="/statistics">
              <button
                style={{ background: text_button_bg_color }}
                className=" text-white px-3 py-1 rounded mt-2 mb-5"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePrice;
