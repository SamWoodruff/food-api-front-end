import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './components/HomePage';
import UserLogin from './components/UserLogin';
import Registration from './components/RegistrationPage'
import OrderHistory from './components/OrderHistory'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () =>{
  return (
    <Router>
      <div>
        <nav id="nav-bar" className="#00bcd4 cyan">
          <ul>
            <li className="link">
              <Link to="/UserLogin">Login</Link>
            </li>
            <li className="link">
              <Link to="/Registration">Registration</Link>
            </li>
            <li className="link">
              <Link to="/">HomePage</Link>
            </li>
            <li className="link">
              <Link to="/OrderHistory">Order History</Link>
            </li>
          </ul>
        </nav>
      </div>
    <div className="App">
      <Route 
        path="/"
        exact
        component={()=><HomePage/>}
      />
      <Route 
        path="/UserLogin"
        exact
        component={()=><UserLogin />}
        />
      <Route
      path="/Registration"
      exact
      component={()=><Registration/>}
      />
      <Route
      path="/OrderHistory"
      exact
      component={() => <OrderHistory/>}
      />
    </div>
    </Router>
  );
}



export default connect()(App);
