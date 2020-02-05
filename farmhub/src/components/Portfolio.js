import React, { Component } from 'react';
import parallax from "../assets/parallax.jpg";
import styled from "styled-components";
import { Jumbotron as Jumbo, Container} from "react-bootstrap";
import './Portfolio.css'


import './Portfolio.css';

 class Portfolio extends Component {
    render() {
      
const Styles = styled.div`
  .jumbo {
    background: url(${parallax}) no-repeat fixed bottom;
    
    height: 50vh;
    color: white;

    position: relative;
   
  }`;
        
        return (
          <Jumbo fluid id="jumbo">
            <Container
              id="container text-center"
              id="statistics"
              className="statistics-section text-white parallax"
            >
              <div className="container">
                <img src={parallax} alt="" className="pic2" />
                <div className="row showcase text-center">
                  
                  <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
                    <div className="item">
                      <div className="icon">
                        <i className="fa fa-align-justify"></i>
                      </div>
                      <h5 className="text-400 mt-4 text-uppercase">
                        <span className="counter">120</span>
                        <br />
                        Websites
                      </h5>
                    </div>
                  </div>
                  <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
                    <div className="item">
                      <div className="icon">
                        <i className="fa fa-users"></i>
                      </div>
                      <h5 className="text-400 mt-4 text-uppercase">
                        <span className="counter">50</span>
                        <br />
                        6000 FarmHub followers
                      </h5>
                    </div>
                  </div>
                  <div data-animate="fadeInUp" class="col-lg-3 col-md-6">
                    <div className="item">
                      <div className="icon">
                        <i className="fa fa-copy"></i>
                      </div>
                      <h5 className="text-400 mt-4 text-uppercase">
                        <span className="counter">320</span>
                        <br />
                        4000 acres
                      </h5>
                    </div>
                  </div>
                  <div data-animate="fadeInUp" class="col-lg-3 col-md-6">
                    <div className="item">
                      <div className="icon">
                        <i className="fa fa-font"></i>
                      </div>
                      <h5 className="text-400 mt-4 text-uppercase">
                        <span className="counter">120</span>
                        <br />
                        Websites
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dark-mask"></div>
            </Container>
          </Jumbo>
        );
    }
}

export default Portfolio;
