import React from "react";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import ChooseUs from "../components/ChooseUs";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Slider />
      <ChooseUs />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
};

export default Home;
