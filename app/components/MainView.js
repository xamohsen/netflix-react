import React from 'react';
import '../styles/Home.css';
import Slider from "./Slider";


const image1 = require("../../public/slide1.jpg");
const image2 = require("../../public/slide2.jpg");
const image3 = require("../../public/slide3.jpg");

const MainView = (props) => {
  return (<div>
    <div data-testid={props.testid}
         className={"main"}>
    </div>
    <Slider cards={[image1, image2, image3, image1, image2]}/>
    <Slider cards={[image2, image3, image1, image2, image1]}/>
    <Slider cards={[image1, image2, image3, image1, image2]}/>
    <Slider cards={[image2, image3, image1, image2, image1]}/>
  </div>)
};
export default MainView;