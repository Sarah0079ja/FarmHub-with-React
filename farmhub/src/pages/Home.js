import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import Sectioncards from "../components/Sectioncards";
import About from "../components/About-us/About";
import Howitworks from "../components/Howitworks/phoneimg";
import MyCarousel from "../components/Happy-investors/Investors";
import Security from "../components/Security/Security";

import FooterPage from "../components/contact/Footer";
import Cards from "../components/farmshop/Fcard";

import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Jumbotron />
      {/* <Layout> */}
        <Sectioncards />
        <Element name="about">
          <About />
        </Element>

        <Howitworks />
        {/* <Portfolio /> */}
        <Cards />
        <MyCarousel />
        <Security />
      {/* </Layout> */}
      <FooterPage />
    </>
  );
};

export default Home;
