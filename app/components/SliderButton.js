import React from 'react';
import Arrow from './icons/Arrow'
import '../styles/SliderButton.css'
const SliderButton = (props) => {
  return <button data-testid={props.testId} className={`slide-button slide-button-${props.direction}`} >
    <span>
      <Arrow />
    </span>
  </button>
};
export default SliderButton;