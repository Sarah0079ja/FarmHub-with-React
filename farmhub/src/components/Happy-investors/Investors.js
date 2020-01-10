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


class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      // height: "70vh",
      marginTop: "50%",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
      fontSize: "5px",
    
    };
  }

  static get CARD_STYLE() {
    return {
      height: "300px",
      width: "300px",
      marginTop: "10px",
      textAlign: "center",
       background: "yellowgreen",
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
      <Container className="Security1">
        <div className="happy">
        <h2 className="happy">Happy Investors</h2>
        </div>
        <Row className="inv">
        
          <Col className="col-sm-6">
          
          <div style={MyCarousel.CONTAINER_STYLE}>
          <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div style={MyCarousel.CARD_STYLE}>
          <Image src={img4 }alt="" style={{height: 100, borderRadius:100 /2, marginTop:10}}/><br></br>
          <h6 style={MyCarousel.Para_style1}>As a Nigerian that just moved back from Europe to Nigeria, 
             FarmHub by friends stment is amazing</h6>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
          <Image src={img1 }alt=""  style={{height: 100, borderRadius:100 /2, marginTop:10}} /><br></br>
          <h6 style={MyCarousel.Para_style1}>As a Nigerian that just moved back from Europe to Nigeria, 
             FarmHub by friends stment is amazing</h6>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
          <Image src={img2 }alt="" style={{height: 100, borderRadius:100 /2, marginTop:10}} /><br></br>
          <h6 style={MyCarousel.Para_style1}>"i love Nature and want to farm. with FarmHub, it gives me
               confidence to invest in commercial large scale agriculture"</h6>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
          <Image src={img3 }alt="" style={{height: 100, borderRadius:100 /2, marginTop:10}} /><br></br>
          <h6 style={MyCarousel.Para_style1} >As a Nigerian that just moved back from Europe to Nigeria,
              I decided to invest in farming but i didnt have a land.i was introduced to
              FarmHub by friends and the Return on investment is amazing</h6>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
          <Image src={img5 }alt="" style={{height: 100, borderRadius:100 /2, marginTop:10}} /><br></br>
          <h6 style={MyCarousel.Para_style1} >
          As a business person in lagos, I am busy and always
          wanted to contribute to farming. FarmHub made it easy to invest locally and
          stay connected to the industry I know"
          </h6>
          </div>
        </ReactCardCarousel>
        
      </div>
          </Col>

          <Col>
          <div className="col-sm-6">
                <div className="reviews">

                 <h3 className="header1"> News about Farming in Nigeria</h3>
                    <video width="320" height="180" controls>
                        <source src="images/videoplayback.mp4" type="video/mp4"/>
                             {/* <source src="images/20191203_151409.mp4" type="video/ogg">  */}
               </video>

            </div>
            </div>
          </Col>

        </Row>
      </Container>
      
    );
  }
}

export default MyCarousel;
  

