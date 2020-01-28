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
            // color: "yellowgreen",
        
        }
        return (
          <React.Fragment>
            <Element>
              <Container id="about">
                <div className="Aboutus" style={style}>
                
                    <h1 className="ab1">About us</h1>
                  
                </div>
                

                <p className="Aboutus1">
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach.<br></br>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach.<br></br>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach.<br></br>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach.
                </p>
              </Container>
            </Element>
          </React.Fragment>
        );
    }
}
export default About;


