import React, { Component } from 'react';
import Card from './Farmcadui';
import img1 from "../assets/cow.jpeg";
import img2 from "../assets/rice.jpeg";
import img3 from "../assets/ginger.jpeg";
import img4 from "../assets/chicken.jpeg";

class Cards extends Component {
  render() {

    return (
      <div className="farm">
        <div className="f1"><h1>Farmshop</h1></div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-3">
              <Card imgsrc={img1} title="Cow Farm" text="Katsina State" textt="10% Return of Investment in 6months" />
            </div>
            <div className="col-md-3">
              <Card imgsrc={img2} title="Rice Farm" text="Nassarawa State" textt="10% Return of Investment in 6months" />
            </div>
            <div className="col-md-3">
              <Card imgsrc={img3} title="Ginger Farm" text="Gombe State" textt="10% Return of Investment in 6months" />
            </div>
            <div className="col-md-3">
              <Card imgsrc={img4} title="ChickenFarm" text="Ogun State" textt="10% Return of Investment in 6months" />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Cards;