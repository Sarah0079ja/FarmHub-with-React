import React, { Component } from "react";
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
          <div id="footers">
            <h3 className="foot-title">© 2020 FarmHub</h3>
            <a href="/" className="facebook social" >.</a>

            <a href="/" className="facebooksocial">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="/" className="Twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="/" className="Instagram-social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        );
    }
}

export default FootPage;