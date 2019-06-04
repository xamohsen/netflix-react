import React from 'react';
import '../styles/Home.css';
import ShowsSlider from "./ShowsSlider";


const image1 = require("../../public/slide1.jpg");
const image2 = require("../../public/slide2.jpg");
const image3 = require("../../public/slide3.jpg");

const MainView = (props) => {
  return (<div>
    <div data-testid={props.testid}
         className={"main"}>
    </div>
      <ShowsSlider cards={[image1, image2, image3, image1, image2]}/>
      <ShowsSlider cards={[image2, image3, image1, image2, image1]}/>
  </div>)
};
export default MainView;