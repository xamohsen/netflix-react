import React from 'react';

const Navbar = () =>
  <header className={"header"}>
    <nav className={"nav"}>
      <img src="../../public/Netflix_Logo.png" alt={"Netflix"}/>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">Recently Add</a></li>
        <li><a href="#">My List</a></li>
      </ul>
    </nav>
  </header>;

export default Navbar;
