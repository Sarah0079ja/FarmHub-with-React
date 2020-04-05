import React, { Component } from "react";

// import { Image } from "react-bootstrap";
// import img1 from "../../assets/farm22.jpg";
// import img2 from "../../assets/37891401-1.jpg";
import layers from "../../assets/layers.png";
import file from "../../assets/file.png";
import ios1 from "../../assets/ios1.jpg";

// import And from "../../assets/and.png";
import payment from "../../assets/payment.png";

import { Container, Row, Col } from "react-bootstrap";
import "./How.css"

class Howitworks extends Component {
  render() {
    return (
      <div className="Howitworkss">
        <Container>
          <Row>
            <Container className="col-sm-9">
              <Col className="Howw">
                <div className="">
                  <Row>
                    <Container>
                      <h3 className="work2">How it works</h3>
                      <p className="work1">
                        In three easy steps, you can start investing and earning
                        a lot of money on high yield farms
                      </p>
                    </Container>
                  </Row>
                  <Row>
                    <Col>
                      <img src={file} alt="" className="pic" />
                      <br></br>
                      <div className="col steps-box">
                        <div className="works-step">
                          <div>1</div>
                          <p>
                            Register/Login on FarmHub to join our investment
                            Farming initiative</p>
                          
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <img src={layers} alt="" className="pic" />
                      <br />
                      <div className="col step-box">
                        <div className="works-step">
                          <div>2</div>
                          <p>Go through our Farmshop to have access to our
                          different Farms using our Technology</p>
                        </div>
                      </div>
                    </Col>

                    <Col>
                      <img src={payment} alt="" className="pic" />
                      <br />
                      <div className="col step-box">
                        <div className="works-step">
                          <div>3</div>
                          <p>
                            Fill the Farm Hub Investment Form and you will get a
                            confirmation on investment Returns and updates for
                            your money  
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <a href="/" className="phoneapp">
                <img src={ios1} alt="Ios app download" className="ios-img" />
              </a>
            </Container>
          </Row>
          {/* </Container> */}
        </Container>
      </div>
    );
  }
}

export default Howitworks;
