import React, { Component } from "react";
// import "./Stylecard.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  // FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
  // NavItemProps
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { form } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class FormModal extends Component {
  state = {
    modal: false,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    farmproduce: "",
    amount: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    form: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //check for registered error
      if (error.id === "FORM_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    //if authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    //clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  

  onSubmit = e => {
    e.preventDefault();

    const { firstname, lastname, email, password, farmproduce, amount } = this.state;

    //Create user object
    const newForm = {
      firstname,
      lastname,
      email,
      password,
      farmproduce,
      amount
    };
    //Attempt investmentform register
    this.props.form(newForm);
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <NavLink
            onClick={this.toggle}
            href="#"
            className="btn btn-outline-success"
          >
            Invest Today
          </NavLink>
        ) : (
          <h9 className="mb-5 ml-4" id="logg">please log in</h9>
        )}

        {/* <NavLink
          onClick={this.toggle}
          href="#"
          className="btn btn-outline-success"
        >
          Invest Today
        </NavLink> */}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            FarmHub Investment Form
          </ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg} </Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <Label for="name">First Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={this.onChange}
              />

              <Label for="name">Last Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={this.onChange}
              />

              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={this.onChange}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={this.onChange}
              />

              <Label for="farmproduce">Farmproduce</Label>
              <select
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="FarmProduce"
              >
                <option>Ginger</option>
                <option>Rice</option>
                <option>Cow</option>
                <option>Chicken</option>
              </select>
              <br />

              <Label for="password">Amount</Label>
              <Input
                type="number"
                name="amount"
                id="amount"
                placeholder="Amount"
                className="mb-3"
                onChange={this.onChange}
              />

              <Button onClick={this.onSubmit} color="dark" style={{ marginTop: "2rem" }} block>
                Invest Today
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { form, clearErrors })(
  FormModal
);
