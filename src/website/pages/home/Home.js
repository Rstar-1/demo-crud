import React from "react";
// Pages
import HeroSection from "./components/HeroSection";
import LeftImageSection from "./components/LeftImageSection";
import OurService from "./components/OurService";
import Subscription from "./components/Subscription";
import Gallery from "./components/Gallery";
import Brand from "./components/Brands";
import Testimonial from "./components/Testimonial";
import RightImageSection from "./components/RightImageSection";

const Home = () => {

  return (
    <div>
      <HeroSection />
      <LeftImageSection />
      <OurService />
      <RightImageSection />
      <Subscription />
      <Brand />
      <Gallery />
      <Testimonial />
    </div>
  );
};

export default Home;
