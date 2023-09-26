import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreData } from "../LocalStorage/LocalStorage";
import DonatePrice from "../DonationDetails/DonatePrice";

const Donation = () => {
  const priceButtonData = useLoaderData();
  const [clickButton, setClickButton] = useState([]);
  const [showAll, setShowAll] = useState(4);

  useEffect(() => {
    const storedCardPrice = getStoreData();
    if (priceButtonData.length > 0) {
      const priceApplied = priceButtonData.filter((item) =>
        storedCardPrice.includes(item.id)
      );
      setClickButton(priceApplied);
    }
  }, []);
  return (
    <div>
      <div className="w-9/12 my-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {clickButton.slice(0, showAll).map((item) => (
          <DonatePrice key={item.id} buttonData={item} />
        ))}
      </div>

      <div className="w-9/12 mx-auto flex justify-center">
        <div className={clickButton.length >= 4 ? "block" : "hidden"}>
          <div className={showAll === clickButton.length && "hidden"}>
            <button
              className="py-2 px-8 bg-gradient-to-r from-orange-600 to-pink-700 text-white rounded shadow-lg font-semibold "
              onClick={() => setShowAll(clickButton.length)}
            >
              Show All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
