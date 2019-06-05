import React, {useEffect, useState} from 'react';


const Navbar = () => {

  const handleScroll = () => {
    if (window.scrollY > 10)
      updateClass("nav black");
    else
      updateClass("nav");
  };

  useEffect(() => {

    return window.addEventListener('scroll', handleScroll);
  });
  const [navClass, updateClass] = useState("nav");

  return <header className={"header"}>
    <nav className={navClass}>
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
};
export default Navbar;
