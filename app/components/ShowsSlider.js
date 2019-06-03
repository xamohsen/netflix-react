import React from 'react';
import '../styles/ShowsSlider.css'
const ShowsSlider = () => {
  return (<div className={"container"}>
    <div className={"item"} data-testid={"item-0"}>{"First Slide"}</div>
    <div className={"item"} data-testid={"item-1"}>{"Second Slide"}</div>
    <div className={"item"} data-testid={"item-2"}>{"Third Slide"}</div>
  </div>)
};

export default ShowsSlider;