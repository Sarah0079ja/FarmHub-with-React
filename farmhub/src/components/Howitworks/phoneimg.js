import React, { Component } from 'react';

import { Image} from 'react-bootstrap';
import img1 from '../../assets/farm22.jpg';
import img2 from '../../assets/37891401-1.jpg';
import { Container, Row, Col } from "react-bootstrap";
import How from '../Howitworks/How.css';

class Howitworks extends Component {
    render() {
        return (
            <div>
                <Container>
                <Row className="Howitworkss"> 
                        <Col className="col-sm-3">
                            <div className="col-sm-3">
                                <Image src={img2} className="newimg" height="600px"/>
                                <Image src={img1} className="newimg2" alt="" height="375px" width="213px" />
                                    
                                        <h5 className="p6">FarmHub</h5>
                         </div>
                      
                       </Col>

                        <Col className="Howw">
                            <div className= "">
                                <h3 className="works">How it works</h3>
                                <p>1.Register/Login on FarmHub to join our investment Farming initiative</p>
                                <p>2.Go through our Farmshop to have access to our different Farms using<br></br>
                                    our Technology
                                </p>
                                <p>3.Pick a produce from the Farmshop by clicking the Invest Today button</p>
                                <p>4.Fill the Farm Hub Investment Form and you will get a confirmation <br></br>
                                    on investment Returns and updates
                                </p>
                            </div>


                         </Col>
                                
                        <Col className="col-sm-4">
                            <div className="">
                                <h3 className="how">Current Portfolio</h3>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">4000+ Farm Acres</p>
                                    </div>

                                    <div className="col-sm-4">
                                            <div className="card">
                                                <div className="card-body">
                                                <p className="card-text">6000 FarmHub Sponsorships</p> 
                                                </div>
                                                
                                                <div className="col-sm-4">
                                            <div className="card">
                                                <div>
                                                <p className="card-text">over 600 Farmers</p>
                                                </div>
                                                
                                                </div> 
                                            </div>
                                            <div className="col-sm-4">
                                            <div className="card">
                                                <div>
                                                <p className="card-text">1,980,000 chicken Reared</p>
                                                </div>
                                                
                                                </div> 
                                            </div>
                                            <div className="col-sm-4">
                                            <div className="card">
                                                <div>
                                                <p className="card-text">4000Farm Followers</p>
                                                </div>
                                                
                                                </div> 
                                            </div>

                                                </div> 
                                            
                                            
                                        </div>
                                    </div> 
                                 </div>
                                       
                        </Col>
                         
                    </Row>
                </Container>
                    
            </div>
        );
            
     }
 }
            
export default Howitworks;