import React from 'react';
import '../styles/Card.css'

const Card = (props) => <div className={"item"}>
  <img src={props.image} alt="" data-testid={props.testid}/></div>;
export default Card;