import React from 'react';
import {Container} from 'reactstrap';
import './Fcard.css';
import {Link} from 'react-router-dom';
import FormModal from "../auth/FormModal";



const Card = (props) => {
    
    return (
      <Container id="card">
        <div className="card text-center shadow">
          <div className="overflow">
            <img
              src={props.imgsrc}
              alt="chicken"
              className="card-img-top"
              height="200px"
            />
          </div>
          <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">{props.text}</p>
            <p className="card-text1 text-tertiary ">{props.textt}</p>
            {/* <Link to="/form" className="btn btn-outline-success">
              Invest Today
            </Link>
              */}
            <FormModal/>
          </div>
        </div>
      </Container>
    );
}

export default Card;