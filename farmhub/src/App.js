import React, {Component} from "react";
import NavBar from "./components/Navbar";

import { BrowserRouter as Router, Switch} from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";
import FormContainer from './pages/FormContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";

import  {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions'


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Router>
             <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/form" component={FormContainer} />
            </Switch>
          </Router>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
