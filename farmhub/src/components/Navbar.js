import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { Link} from 'react-router-dom';
import {Link as scroll} from 'react-scroll';


import { Nav, Navbar, NavDropdown, button, NavLink } from 'react-bootstrap';
// import styled from 'styled-components';	

        const NavBar = () => {
            const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

            const style2 = {         
                color: 'Yellowgreen',
                margin: '5px'
            };
              const style = {
                
                borderRadius : '15px',
                color: 'Yellowgreen',
                backgroundColor: 'grey',
                // marginLeft: '80%',
                borderColor: 'yellowgreen',
                width: '80px',
                marginTop: "10px",
                marginBottom: "10px"
             };
             const style3 = {
                padding: "5px",
                 color: "Yellowgreen",
                 marginTop: "30px",
                 borderRadius : '15px',
                 borderColor: 'yellowgreen',

                
             };
       
           
          
            return (
              <div>
                  
                
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               
                
                    <Navbar.Brand href Link to="/Jumbotron"  style={style2}>FarmHub</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav left className="mr-auto" >
                            <Nav.Link to="/About"  style={style2}>About</Nav.Link>
                            <Nav.Link to="/Fcard"  style={style2}>FarmShop</Nav.Link>
                            <NavDropdown title="Happy-Investors" id="collasible-nav-dropdown" bg="yellowgreen"  style={style2}>
                                <NavDropdown.Item Link to="/Investor"  style={style2}>Happy Investors</NavDropdown.Item>
                                <NavDropdown.Item Link to="/Security"  style={style2}>Security</NavDropdown.Item>
                               
                            </NavDropdown>
                            {!isAuthenticated && (
                            <button onClick={() => loginWithRedirect({})} style={style}>Log in</button>
                             )}

                             {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                             <span>
                             {/* <Link to="/">Home</Link>&nbsp; */}
                              <Link to="/profile" style={style3}>Profile</Link>
                             </span>
                             <Nav.Link to="/Footer" style={style2}>Contact</Nav.Link>
                        </Nav>
                        <Navbar left>
                    {/* <Button className="btnn" style={style1}>Sign up</Button>
                    <Button className="btnn" style={style1}>Login</Button> */}
                    
                    </Navbar>
                    </Navbar.Collapse>
                    
                </Navbar>
                
             </div>
             );
          };
          
          export default NavBar;
       

