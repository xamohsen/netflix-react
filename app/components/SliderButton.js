import React from 'react';

const SliderButton = (props) => {
  return <div data-testid={props.testId} className={props.direction === "left"? "left-slider": "right-slider"}>

  </div>
};
 export default SliderButton;