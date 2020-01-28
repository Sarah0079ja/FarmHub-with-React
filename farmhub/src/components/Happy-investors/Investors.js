import React, { Component } from "react";
// import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Image} from 'react-bootstrap';
import "../Happy-investors/Investor.css"
import { Container, Row, Col } from "react-bootstrap";
import img4 from '../../assets/ppl6.jpg';
import img1 from '../../assets/ppl8.jpg';
import img2 from '../../assets/ppl11.jpg';
import img3 from '../../assets/ppl13.jpg';
import img5 from '../../assets/ppl15.jpg';
import Track from "../../assets/Track.png";


class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      // height: "70vh",
      marginTop: "30%",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
      fontSize: "5px",
      marginBottom: "170px"
    
    };
  }

  static get CARD_STYLE() {
    return {
      height: "300px",
      width: "300px",
      marginTop: "10px",
      textAlign: "center",
      backgroundImage: "linear-gradient(to right,#ACBB16,  #007547)",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "5px",
      textTransform: "Lowercase",
      borderRadius: "10px",
      boxSizing: "border-box",
      
      
    };
    
  }

  render() {
    return (
      <div id="Security1">
        <Container>
          <Row>
            <Col className="col-sm-6">
              <Container >
                  <h3 className="happy">Happy Investors</h3>
              <br />
              <p className="happy1">
                Join Nigerians like you who are investing
                <br /> in Agriculture from the comfort of their homes
              </p>
              <br />
              </Container>
              

              <div style={MyCarousel.CONTAINER_STYLE} id="true">
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                  <div style={MyCarousel.CARD_STYLE}>
                    <Image
                      src={img4}
                      alt=""
                      style={{
                        height: 100,
                        borderRadius: 100 / 2,
                        marginTop: 10
                      }}
                    />
                    <br></br>
                    <h6 style={MyCarousel.Para_style1}>
                      As a Nigerian that just moved back from Europe to Nigeria,
                      FarmHub by friends stment is amazing
                    </h6>
                    <footer className="foot2">Adedayo.O</footer>
                  </div>
                  <div style={MyCarousel.CARD_STYLE}>
                    <Image
                      src={img1}
                      alt=""
                      style={{
                        height: 100,
                        borderRadius: 100 / 2,
                        marginTop: 10
                      }}
                    />
                    <br></br>
                    <h6 style={MyCarousel.Para_style1}>
                      As a Nigerian that just moved back from Europe to Nigeria,
                      FarmHub by friends stment is amazing
                    </h6>
                    <footer className="foot2">James.O</footer>
                  </div>
                  <div style={MyCarousel.CARD_STYLE}>
                    <Image
                      src={img2}
                      alt=""
                      style={{
                        height: 100,
                        borderRadius: 100 / 2,
                        marginTop: 10
                      }}
                    />
                    <br></br>
                    <h6 style={MyCarousel.Para_style1}>
                      "i love Nature and want to farm. with FarmHub, it gives me
                      confidence to invest in commercial large scale
                      agriculture"
                    </h6>
                    <footer className="foot2">Will Smith</footer>
                  </div>
                  <div style={MyCarousel.CARD_STYLE}>
                    <Image
                      src={img3}
                      alt=""
                      style={{
                        height: 100,
                        borderRadius: 100 / 2,
                        marginTop: 10
                      }}
                    />
                    <br></br>
                    <h6 style={MyCarousel.Para_style1}>
                      As a Nigerian that just moved back from Europe to Nigeria,
                      I decided to invest in farming but i didnt have a land.i
                      was introduced to FarmHub by friends and the Return on
                      investment is amazing
                    </h6>
                    <footer className="foot2">Gerald Buttler</footer>
                  </div>
                  <div style={MyCarousel.CARD_STYLE}>
                    <Image
                      src={img5}
                      alt=""
                      style={{
                        height: 100,
                        borderRadius: 100 / 2,
                        marginTop: 10
                      }}
                    />
                    <br></br>
                    <h6 style={MyCarousel.Para_style1}>
                      As a business person in lagos, I am busy and always <br />
                      wanted to contribute to farming. FarmHub made it easy{" "}
                      <br />
                      to invest locally and stay connected to the industry I
                      know"
                    </h6>
                    <footer className="foot2">Anthony joshua</footer>
                  </div>
                </ReactCardCarousel>
              </div>
            </Col>

            <Col className="col-sm-6">
              <h3 className="happy">Track your Investments</h3>
              <br />

              <p className="happy1">
                In FarmHub, you can monitor your investment and track <br />
                your farm yields in any of our smart farms wherever you are.
              </p>
              <br />
              <img src={Track} alt="" className="pic1" height="200px" />
            </Col>
          </Row>

          {/* <Row>
            <Col className="col-sm-6"></Col>
            <Col className="col-sm-6"></Col>
          </Row>
          <Row className="inv">
            <Col className="col-sm-6"></Col>

            <Col className="col-sm-6">
              <div className="reviews"></div>
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default MyCarousel;
  

