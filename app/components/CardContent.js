import React from "react";
import '../styles/ShowsSlider.css'


const CardContent = () => (<div className="content">
  <div className="background">
    <div className="left" data-testid={"left"}>left</div>
    <div className="right" data-testid={"right"}>right</div>
  </div>
  <div className="content-container">content here...</div>
</div>);

export default CardContent;