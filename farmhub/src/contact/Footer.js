import React, { Component } from "react";
import { Col, Container, Row, Footer } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
faFacebook,
faTwitter,
faInstagram,

} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

class FootPage extends Component {
    render() {
        return (
            <div className="footers">
             <h3 className="foot-title">@FarmHub</h3>
             <a href = "" 
             className="facebook social"/>  

             
             <a href = "" 
             className="facebook social">
             <FontAwesomeIcon icon={faFacebook} size="2x"/>
             </a> 
             <a href = "" 
             className="Twitter social">
             <FontAwesomeIcon icon={faTwitter} size="2x"/>
             </a> 
             <a href = "" 
             className="Instagram social">
             <FontAwesomeIcon icon={faInstagram} size="2x"/>
             </a> 
                
            </div>
        );
    }
}

export default FootPage;




// const style = {
//     backgroundColor: "dark"
// };
// return(
//     <div className= "Footer">
//         <Footer className="font-small pt-4 mt-4">
//         <Container fluid className="text-center text-md-left" style={style}>
//         <Row>
//             <Col md="6">
//             <h5 className="title">FarmHub</h5>
//             <p>
//             Contact us Today!
//             </p>
//             </Col>
//             <Col md="6">
//                 <h5 className="title">Links</h5>
//                 <ul>
//                  <li className="Sm-links">
//                     <a href="#!">Link 1</a>
//                 </li>
               
//                 </ul>
//             </Col>
//      </Row>
//     </Container>
//     <div className="footer-copyright text-center py-3">
//         <Container fluid>
//         &copy; {new Date().getFullYear()} Copyright: <a href="/"> FarmHub.com </a>
//         </Container>
//     </div>
//      </Footer>
//     </div>
// );
// }
// }