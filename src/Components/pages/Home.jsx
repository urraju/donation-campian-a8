import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeCard from "../HomeCard/HomeCard";

const Home = () => {
  const data = useLoaderData();
  const [displayCards, setDisplayCards] = useState([...data]);
  const [search, setSearch] = useState([...data]);

  const handleSearch = (e) => {
    let input = e.target.value.toLowerCase();
    const searchCards = search.filter((card) =>
      card.category.toLowerCase().startsWith(input)
    );
    setDisplayCards(searchCards);
  };

  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <div className="grid my-5 md:my-10 lg:my-10 mt-20 md:mt-28 lg:mt-56 w-9/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {displayCards?.map((item) => (
          <HomeCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
