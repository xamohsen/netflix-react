import React from 'react';
import '../styles/ShowsSlider.css';
import Card from './Card'

const ShowsSlider = (props) => {

  return (<div className={"container"}>
    {
      props.cards.map((card, index) => {
          return <Card image={card}
                       testid={`item-${index}`}
                       key={index}/>
        }
      )
    }
  </div>)
};

export default ShowsSlider;