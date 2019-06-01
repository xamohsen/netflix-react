import React from 'react';

import '../styles/navbar.css'

const Navbar = () => <nav className={"nav"}>
  <img src="../../Netflix_Logo.png" alt={"Netflix"}/>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">TV Shows</a></li>
    <li><a href="#">Movies</a></li>
    <li><a href="#">Recently Add</a></li>
    <li><a href="#">My List</a></li>

  </ul>
</nav>;

export default Navbar;
