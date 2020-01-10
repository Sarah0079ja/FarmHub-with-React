import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import farm1 from '../assets/farm1.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${farm1}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 450px;
    position: relative;
    z-index: -2;

}

.overlay{
    background-color: #000;
    opacity: 0.8;
    postition: absolute;
    top: 0;
    left: 0;
    bottom: 0; 
    right: 0;
    z-index: -1;
}
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>FarmHub</h1>
                <p>Creating Avenue to achieve Food Security In Nigeria</p>
            </Container>
        </Jumbo>
    </Styles>
)
