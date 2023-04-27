import React from "react";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import ChooseUs from "../components/ChooseUs";
import Services from "../components/Services";
// import TestimonialCarousel from "../components/TestimonialCarousel";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Slider />
      <ChooseUs />
      <Services />
      <h1>Testimonials</h1>
      <Testimonials />
    </div>
  )
};

export default Home;
