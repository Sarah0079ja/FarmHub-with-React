import React from "react";
// import "./App.css";
// import NavBar from '../components/Navbar';
// import FormContainer from "../components/Container/FormContainer";
// import { Layout } from "../components/Layout";
import { Jumbotron } from "../components/Jumbotron";
import Sectioncards from "../components/Sectioncards";
import About from "../components/About-us/About";
import Howitworks from "../components/Howitworks/phoneimg";
// import Portfolio from "../components/Portfolio";
import MyCarousel from "../components/Happy-investors/Investors";
import Security from "../components/Security/Security";

// import Profile from './components/Profile';
import FooterPage from "../components/contact/Footer";
import Cards from "../components/farmshop/Fcard";
// import {connect} from 'react-redux';

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
