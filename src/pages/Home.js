import React from "react";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import ChooseUs from "../components/ChooseUs";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Slider />
      <ChooseUs />
      <Services />
    </div>
  )
};

export default Home;
