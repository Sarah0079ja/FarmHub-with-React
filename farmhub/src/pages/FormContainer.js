import React from 'react';
import './FormContainer.css';
import styled from 'styled-components';
import farm3 from '../assets/farm3.jpg';


const Styles = styled.div`
.jumbo {
    background: url(${farm3}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 450px;
    position: relative;
    z-index: 1;

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

export default  class FormContainer extends React.Component {

  state = {
    firstName: '',
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    farmProduce: "",
    farmProduceError: "",
    Amount: "",
    AmountError: ""
  };

  change = e => {
    this.onChange({ [e.target.name]: e.target.value }); 
    this.state({
      [e.target.name]: e.target.value
    });    
  };

  validate = () => {
    let isError = false;
    const errors = {
      
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "", 
        farmProduceError: "",
        AmountError: ""
      
    };

    if(this.state.firstName.length < 5) {
      isError = true;
      errors.firstNameError = "Firstname requires 5 characters long";
    } 

    if(!this.state.email.indexOf('@') === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    } 

   
    this.setState({
       ...this.state,
      ...errors
    });
    
    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
  
    const err = this.validate();
    if (!err) {
     //clear form
     this.setState({
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameErrors: "",
      email: "",
      emailErrors: "",
      password: "",
      passwordErrors: "",
      farmProduce: "",
      farmProduceErrors:"",
      Amount: "",
      AmountErrors: ""
    });
      this.onChange   ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        farmProduce: "",
        Amount: ""
      });
    }
      
      
  };
  render() {
    return (
      <Styles>
        <div fluid className="jumbo" id="overlay">
        <form id="forms">
        <h3 className="heading">FarmHub Investment Form</h3>

        <label className="input">FirstName</label><br/>
        <input
        name="firstName"
        className="input"
        placeholder="First name"
        value={this.state.firstName}
       onChange={e => this.change(e)}
        errorText={this.state.firstNameError} />
        <br/>
         
        <label className="input">LastName</label><br/>
        <input
        name="lastName"
        className="input"
        placeholder="Last name"
        value={this.state.lastName}
        onChange={e => this.change(e)} 
        errorText={this.state.lastNameError}/>
        <br/>


        <label className="input">Email</label><br/>
        <input
        name="email"
        className="input"
        placeholder="Email"
        value={this.state.email}
        onChange={e => this.change(e)}
        errorText={this.state.emailError} />
        <br/>

        <label className="input">Password</label><br/>
        <input
        name="password"
        className="input"
        placeholder="password"
        value={this.state.password}
        onChange={e => this.change(e)}
        errorText={this.state.passwordError} />
        <br/>
        
        <label className="input">Farmproduce</label><br/>
        <select 
        name="farmProduce"
        className="input"
        placeholder="FarmProduce"
        value={this.state.farmProduce}
        onChange={e => this.change(e)} 
        errorText={this.state.farmProduceError}>

          <option value="ginger">Ginger</option>
          <option value="rice">Rice</option>
          <option value="cow">Cow</option>
          <option value="chicken">Chicken</option>
        </select>
        <br/>
        
        <label className="input">Amount</label><br/>
        <input
        name="amount"
        className="input"
        placeholder="Amount"
        value={this.state.amount}
        onChange={e => this.change(e)}
        errorText={this.state.amount} />
        <br/>
          <button className= "btn1" onClick={e => this.onSubmit(e)}>Submit</button>
     
      </form>
        </div>
      </Styles>
      
    );
  } 
}
