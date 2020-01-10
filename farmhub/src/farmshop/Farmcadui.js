import React from 'react';
import './Fcard.css';
import {Link} from 'react';
// import Investmentform from '../Investmentform/Investmentform';

const Card = (props) => {
    
    return (
        <div id="card">
            
            <div className="card text-center shadow" >
                <div className="overflow">
                    <img src={props.imgsrc} alt="chicken" className="card-img-top" height="200px" />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                        {props.text}
                    </p>
                    <p className="card-text1 text-tertiary ">
                        {props.textt}
                    </p>
                     <a href Link to="/FormContainer" className="btn btn-outline-success">Invest Today</a>
                </div>
            </div>
        </div>
    );
}

export default Card;