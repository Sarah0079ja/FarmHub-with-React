import React, { Component } from 'react';

import './About.css';
import { Element } from 'react-scroll';
import { Container} from 'react-bootstrap';


class About extends Component {
    render() {
      
        const style = {
            justify: "center",
            alignItems: "center",
            margintop: "5%",
            backgroundColor: "#FFFFFF",
            marginleft: "1px",
           
        
        }
        return (
          <React.Fragment>
            <Element>
              <Container id="about">
                <div className="Aboutus" style={style}>
                  <h1 className="ab1">About us</h1>
                </div>

                <p className="Aboutus1">
                  We connect small and medium scale farmers to investors and
                  produce buyers globally to empower them scale their farms into
                  commercial sizes and equip the next generation of farmers. In
                  the last couple of years, Farmhub has worked with more than
                  600 investors to invest over millions of naira in more than 50 verified
                  and trusted farmers who are scaling fast to become commercial
                  farmers.<br/> For people who want to be financially free and
                  contribute to achieving food security for Africa, Farmhub
                  is providing a simple, safe and sustainable platform for you
                  to grow your funds whilst also enabling real farmers to grow
                  food for the African populace. 
                  
                  
                </p>
              </Container>
            </Element>
          </React.Fragment>
        );
    }
}
export default About;


