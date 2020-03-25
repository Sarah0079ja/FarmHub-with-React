import React, { Component, Fragment} from 'react';
import './Stylecard.css';
// import NavBar from "./components/Navbar";

 import { Link} from 'react-router-dom';
// import {Link, animateScroll as scroll} from 'react-scroll';
import {scroller} from 'react-scroll';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 

import RegisterModal from './auth/RegisterModal';
import LoginModal from "./auth/LoginModal";
import Logout from './auth/Logout';


import { Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';

  class NavBar extends Component{
    state = {
      isOpen: false
    };

    static propTypes = {
      auth: PropTypes.object.isRequired
    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    render() {
      const { isAuthenticated, user } = this.props.auth;
      const authLinks = (
        <Fragment>
          <NavItem><span className="navbar-text mr-3">
           <strong>{ user ? `Welcome ${user.name}` : ''}</strong> 
            </span></NavItem>
          <Logout />
        </Fragment>
      ); 
      const guestLinks = (
        <Fragment>
          <NavItem>
            <RegisterModal />
          </NavItem>
          <NavItem>
            <LoginModal />
          </NavItem>
        </Fragment>
      );

      const ScrolltoElement = ele => {
        scroller.scrollTo(ele, { duration: 1500, delay: 100, smooth: true });
      };
      return (
        <div className="nav1">
          <Navbar
            right
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            //  className="mb-5"
          >
            <Navbar.Brand>
              {" "}
              <Link to="/">FarmHub</Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                {isAuthenticated ? authLinks : guestLinks}
                <Nav right className="navright">
                  <Nav.Link>
                    <a onClick={() => ScrolltoElement("about")}> About</a>
                  </Nav.Link>

                  <NavDropdown
                    title="Happy-Investors"
                    id="collasible-nav-dropdown"
                    bg="yellowgreen"
                  >
                    <NavDropdown.Item>
                      <a
                        onClick={() => ScrolltoElement("Security1")}
                        // style={style2}
                      >
                        Happy Investors
                      </a>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <a onClick={() => ScrolltoElement("sec1")}>Security</a>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link>
                    <a onClick={() => ScrolltoElement("footers")}>Contact</a>
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
       
          const mapStateToProps = state => ({
            auth: state.auth
          });
          export default connect(mapStateToProps, null)(NavBar);
       

