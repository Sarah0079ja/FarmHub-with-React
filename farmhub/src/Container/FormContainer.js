import React, { Component } from "react";

import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phonenumber: "",
        produceoptions: "",
        amount: "", 
        // Terms: "",
        
      },
      produceOptions: ["Male", "Female", "Others"],
    }
    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
      };
      
      
    //   skillOptions: ["Programming", "Development", "Design", "Testing"]
    // }
    // this.handleTextArea = this.handleTextArea.bind(this);
    this.handlephonenumber = this.handlePhonenumber.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleFirstName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    // this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFirstName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          firstname: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  
  handleLastName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
         lastname: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handlePhonenumber(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          phonemumber: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmail(e) {
    // console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          email: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  
  handlePassword(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          password: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
//   handleCheckBox(e) {
//     const newSelection = e.target.value;
//     let newSelectionArray;

//     if (this.state.newUser.skills.indexOf(newSelection) > -1) {
//       newSelectionArray = this.state.newUser.skills.filter(
//         s => s !== newSelection
//       );
//     } else {
//       newSelectionArray = [...this.state.newUser.skills, newSelection];
//     }

//     this.setState(prevState => ({
//       newUser: { ...prevState.newUser, skills: newSelectionArray }
//     }));
//   }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://localhost:3000/Investmentform", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phonenumber: "",
        produceoptions: "",
        amount: "", 
        // Terms: "",
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
           {/* FirstName of the user */}
        <Input
          inputType={"text"}
          title={"First Name"}
          name={"firstname"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}

         {/* LastName of the user */}
         <Input
          inputType={"text"}
          title={"Last Name"}
          name={"lastname"}
          value={this.state.newUser.name}
          placeholder={"Enter your Lastname"}
          handleChange={this.handleInput}
        />{" "}

            {/* Email */}
          <Input
          inputType={"text"}
          title={"Email"}
          name={"email"}
          value={this.state.newUser.name}
          placeholder={"Enter your Email"}
          handleChange={this.handleInput}
        />{" "}
       
        {/* Phonenumber */}
        <Input
          inputType={"number"}
          name={"phonenumber"}
          title={"Phonenumber"}
          value={this.state.newUser.phonenumber}
          placeholder={"Enter your Phonenumber"}
          handleChange={this.handlePhonenumber}
        />{" "}

        {/* Amount */}
        <Input
          inputType={"number"}
          name={"amount"}
          title={"Amount"}
          value={this.state.newUser.amount}
          placeholder={"Enter Amount"}
          handleChange={this.handleAmount}
        />{" "}
        
        {/* Produce options */}
        <Select
          title={"Farmshop"}
          name={"produceOptions"}
          options={this.state.produceOptions}
          value={this.state.newUser.produce}
          placeholder={"Select FarmProduce"}
          handleChange={this.handleInput}
        />{" "}
        
        {/* <CheckBox
          title={"Skills"}
          name={"skills"}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />{" "} */}
        {/* Skill */}

        {/* <TextArea
          title={"About you."}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Describe your past experience and skills"}
        /> */}
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
