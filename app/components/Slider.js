import React from 'react';
import '../styles/ShowsSlider.css';
import Card from './Card'
import SliderButton from "./SliderButton";

const Slider = (props) => {

  return (<div className={"container"}>
    <SliderButton direction={'left'}/>
    {
      props.cards.map((card, index) => {
          return <Card image={card}
                       testid={`item-${index}`}
                       key={index}/>
        }
      )
    }
    <SliderButton direction={'right'}/>
  </div>)
};

export default Slider;