import React from "react";
import BottomCard from "../BottomCard/BottomCard";
import MiddleCard from "../MiddleCard/MiddleCard";
import UpperCard from "../UpperCard/UpperCard";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div id="home">
        <UpperCard />
        <MiddleCard />
        <BottomCard />
      </div>
      <div id="home_desktop">
        <div className="upper_container">
          <UpperCard />
          <MiddleCard />
        </div>
        <div className="home_lower_container">
          <BottomCard />
        </div>
      </div>
    </>
  );
};

export default Home;
