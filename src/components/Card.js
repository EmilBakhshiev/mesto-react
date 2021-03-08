import React from 'react';
import '../index.css';

function Card (props){
    
    function handleClick() {
        props.onCardClick(props.card);
      }  
    return(
        <div className="galery__card">
        <img src={props.card.link} alt={props.card.name} className="galery__card-image" />
        <button className="galery__card-remove"></button>
        <div className="galery__card-wrapper">
            <h2 className="galery__card-title">{props.card.name}</h2>
            <div className="galery__card-like-wrapper">
                <button className="galery__card-like" type="button"></button>
                <p className="galery__card-like-number">{props.card.likes.length}</p>
            </div>
        </div>
        </div>
    )
}
export default Card;