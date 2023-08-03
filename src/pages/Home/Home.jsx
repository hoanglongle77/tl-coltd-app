import React from "react";
import "./home.css";
import { Slider, Products, News } from "../../components";

const Home = () => {
  return (
    <div>
      <Products />
      <Slider />
      <News />
    </div>
  );
};

export default Home;
