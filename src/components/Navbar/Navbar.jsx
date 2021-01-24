import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'

const Navbarr = () => {
  return (

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Campus Listing</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/">Home </Link>
          </li>
          <li class="nav-item">
            <Link to="/campuses">Campuses</Link>
          </li>
          <li class="nav-item"> 
            <Link to="/students">Students</Link>          
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbarr;
