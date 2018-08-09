import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>header</h1>
    <NavLink to="/" activeClassName='is-active' exact={true}>Home</NavLink>
    <NavLink to="/trips" activeClassName='is-active' exact={true}>Trips</NavLink>
    <NavLink to="/trips/new" activeClassName='is-active' exact={true}>New Trip</NavLink>

    <NavLink to="/profile" activeClassName='is-active'>Profile</NavLink>
  </header>
);
export default Header;