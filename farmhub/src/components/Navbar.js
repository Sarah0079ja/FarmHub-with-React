import React, { Component, Fragment} from 'react';
import './Stylecard.css';

import { Link} from 'react-router-dom';

import {Container} from 'reactstrap';
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
        <Fragment id='reg1'>
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
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             <Container>
              <Navbar.Brand className="navcollapse">
                <Link to="/">FarmHub</Link>
              </Navbar.Brand>

              <div className="ml-auto">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                  id="responsive-navbar-nav"
                  className="navcollapse"
                >
                  <Nav className="ml-auto">
                    {isAuthenticated ? authLinks : guestLinks}
                    {/* <NavItem right className="navright"> */}
                    <NavItem className="span1">
                      <a>
                        <Link
                          a
                          href="/"
                          className="nav-link"
                          onClick={() => ScrolltoElement("about")}
                        >
                          About
                        </Link>
                      </a>
                      {/* <Link to="/" onClick={() => ScrolltoElement("about")}>
                        {" "}
                        About
                      </Link> */}
                    </NavItem>

                    <NavDropdown
                      title="Happy-Investors"
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item>
                        <Link
                          to="/"
                          onClick={() => ScrolltoElement("Security1")}
                          // style={style2}
                        >
                          Happy Investors
                        </Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <Link to="/" onClick={() => ScrolltoElement("sec1")}>
                          Security
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavItem className="span1">
                      <a>
                        <Link
                          a
                          href="/"
                          className="nav-link"
                          onClick={() => ScrolltoElement("footers")}
                        >
                          Contact
                        </Link>
                      </a>

                      {/* <Link to="/" onClick={() => ScrolltoElement("footers")}>
                        Contact
                      </Link> */}
                    </NavItem>
                    {/* </NavItem> */}
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Container>
          </Navbar>
        </div>
      );
    }
  }
       
          const mapStateToProps = state => ({
            auth: state.auth
          });
          export default connect(mapStateToProps, null)(NavBar);
       

