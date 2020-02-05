import React, { Component } from "react";

import { Image } from "react-bootstrap";
import img1 from "../../assets/farm22.jpg";
import img2 from "../../assets/37891401-1.jpg";
import layers from "../../assets/layers.png";
import file from "../../assets/file.png";
import payment from "../../assets/payment.png";
import { Container, Row, Col } from "react-bootstrap";
import How from "./How.css";

class Howitworks extends Component {
  render() {
    return (
      <div className="Howitworkss">
        <Container>
          <Row>
           
            {/* <Col className="col-sm-3">
              <div className="col-sm-3">
                <Container></Container>
                {/* <Image src={img2} className="newimg" height="500px" />
                <Image
                  src={img1}
                  className="newimg2"
                  alt=""
                  height="375px"
                  width="213px"
                />
                <h5 className="p6">FarmHub</h5>
              </div> */}
            {/* </Col>  */}
            <Container className="col-sm-9">
              <Col className="Howw">
                <div className="">
                  <Row>
                    <Container>
                      <h3 className="work2">How it works</h3>
                      <p className="work1">
                        In three easy steps, you can start investing and <br />
                        earning a lot of money on high yield farms
                      </p>
                    </Container>
                  </Row>
                  <Row>
                    <Col>
                      <img src={file} alt="" className="pic" />
                      <br></br>
                      <p>
                        1.Register/Login on FarmHub to join our investment
                        Farming initiative
                      </p>
                    </Col>
                    <Col>
                      <img src={layers} alt="" className="pic" />
                      <br />
                      2.Go through our Farmshop to have access to our different
                      Farms using our Technology
                    </Col>

                    <Col>
                      <img src={payment} alt="" className="pic" />
                      <br />
                      <p>
                        3. Fill the Farm Hub Investment Form and you will get a
                        confirmation on investment Returns and updates for your money
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Container>
          </Row>
          {/* </Container> */}
        </Container>
      </div>
    );
  }
}

export default Howitworks;
