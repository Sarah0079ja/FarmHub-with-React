import React, {Component} from 'react';
import { Container } from 'react';
import uuid from 'uuid';

class Investmentform extends Component {
  state = {
    items: [
      {id: uuid(), name: ''},
      {id: uuid(), email: ''},
      {id: uuid(), password: ''},
      {id: uuid(), phonemunber: ''},
      {id: uuid(), account: ''}
    ]
  }
  render (){
    return (
      <Container>
        
      </Container>

    );
  }
}

export default Investmentform;
    