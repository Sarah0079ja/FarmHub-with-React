import React from 'react';
import NavBar from './components/Navbar';
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import history from "./utils/history";
import './App.css'; import About from './About-us/About';
import { Layout } from './components/Layout'; 
import  {Jumbotron}  from './components/Jumbotron';
import  Sectioncards  from './components/Sectioncards';
import Cards from './farmshop/Fcard';
import Howitworks from './components/Howitworks/phoneimg';
import MyCarousel from './components/Happy-investors/Investors';
import Security from './Security/Security';
// import Investmentform from './Investmentform/Investmentform';
import FormContainer from "./Container/FormContainer";
import Profile from './components/Profile'
// import { createBrowserHistory } from "history";
import FooterPage from "./contact/Footer";


function App () {
  
    const { loading } = useAuth0();

    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <React.Fragment>
        <Router history={history}>
        <NavBar />
        <Jumbotron/>
        <Layout>
           
          <Sectioncards />
          <About /> 
          <Howitworks />
          <Router>
            <Switch>  
              <Route exact path="/" component={Jumbotron} />
              <Route path="/profile" component={Profile} />  */}
              <Route path="/FormContainer" component={FormContainer} /> 
            </Switch>
          </Router>
          <Cards />
          <MyCarousel />
          <Security />
           <FooterPage /> 
           
        </Layout>
        </Router>
        
      </React.Fragment>
    );
  }


export default App;
