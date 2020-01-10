import React, { Component } from 'react';
import { Image} from 'react-bootstrap';
import img1 from '../assets/food1.jpg';
import img2 from '../assets/farmer2.jpg';
import img3 from '../assets/family.png';
import img4 from '../assets/land.jpg';
import './Sectioncards.css'
// import Stylecard from './components/Stylecard.css';


class Sectioncards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center" id="section">
                
             <div className="shadow p-3 mb-5 bg-white rounded p4 col-md-3"><img src={img1} alt ="" width="30px"/> Ensuring Food
                security</div>
              <div className="shadow p-3 mb-5 bg-white rounded p4 col-md-3"><img src={img2} alt="" width="30px"/> Creating jobs
             </div>
             <div className="shadow p-3 mb-5 bg-white rounded p4 col-md-3"><img src={img3} alt="" width="30px"/>Earn More</div>
             <div className="shadow p-3 mb-5 bg-white rounded p4 col-md-3"><img src={img4} alt="" width="30px"/>Plant More</div>
                
            </div>
        )
    }
};

export default Sectioncards;
