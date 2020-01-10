import React, {Component} from 'react';
import { Image} from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import img1 from '../assets/trust_badge_design_1024x1024@2x.webp';
import img2 from '../assets/insurance.jpg';
import img3 from '../assets/mastercad.png';
import img4 from '../assets/bank card.jpg';
import './Security.css'

 class Security extends Component {
     render () {
         return(
             <Container className="sec1">
                 <Row>
                     <Col>
                     <div className="container-security1">
                         <div className="row">
                             <div className="col-md-8">
                                <h3 className="header1" > Security and Insurance</h3>
                                <p className="paragraph2">
                                FarmHub has your privacy at heart. Our platform was built with Bank-Grade security features.
                                    We work with a PCIDSS compliant payment processor for the security of data. Our farms are
                                    also
                                    comprehensively insured by stutern Assurance.
                                </p>
                             </div>
                        </div>
                     </div>       
                     
                     </Col>

                     <Col className='sec-badge'>
                     <div className="Sec-container">
                         <div className="row">
                                <div className="col-sm-3">
                                <Image src={img1} className="newimg" alt="trust badge" width="300px"/>
                                 
                                </div>                        
                        </div>
                     </div>
                     <div className="sec">
                         <div className="c">
                         <Image src={img2} className="newimg" alt="insurance.jpg" width="100px"/>
                         </div>

                         <div className="c">
                         <Image src={img3} className="newimg" alt="mastercad.png" width="100px"/> 
                         </div>

                         <div className="c">
                         <Image src={img4} className="newimg" alt="bank card.jpg" width="100px"/>  
                         </div>
                     </div>
                     
                     </Col>
                 </Row>
             </Container>

         );
     }
 }
 export default Security;