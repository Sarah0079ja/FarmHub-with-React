import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import farm3 from '../assets/farm3.jpg';
import './Stylecard.css'

const Styles = styled.div`
  .jumbo {
    background: url(${farm3}) no-repeat fixed bottom;
    background-size: cover;
    color: white;

    position: relative;
   
  }

  .overlay {
    background-color: #000;
    opacity: 0.8;
    postition: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    marginbottom:30; 
    right: 0;
    z-index: -1;
  }

 
`;

export const Jumbotron = () => (
         <Styles>
           <Jumbo fluid className="jumbo">
             <div className="overlay">
               <Container className="container text-center jum">
                 <h1>FarmHub</h1>
                 <p>Creating Avenues to achieve Food Security In Nigeria</p>
               </Container>
             </div>
           </Jumbo>
         </Styles>
       );
