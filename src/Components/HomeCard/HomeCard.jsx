import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { AiFillDollarCircle } from "react-icons/ai";
const HomeCard = ({ data }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = data;
  return (
    <div>
      <ToastContainer />
      <Link to={`/donation/${id}`}>
        <div
          onClick={() => toast("Selected Successfully")}
          style={{ background: card_bg_color }}
          className=" rounded-lg"
        >
          <img className="mx-auto w-full" src={picture} alt="" />
          <div className="px-2 py-4">
            <p
              style={{
                background: category_bg_color,
                color: text_button_bg_color,
              }}
              className="font-bold inline-block px-3 rounded-sm mb-2"
            >
              {category}
            </p>
            <p style={{ color: text_button_bg_color }} className="font-bold">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;
