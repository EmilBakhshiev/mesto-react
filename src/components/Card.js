import React from 'react';

function Card (props){
    
    function handleClick() {
        props.onCardClick({name: props.card.name, link: props.card.link});
      }  
    return(
        <div className="galery__card">
        <img src={props.card.link} alt={props.card.name} className="galery__card-image" onClick={handleClick} />
        <button className="galery__card-remove" onClick={props.onRemoveCard}></button>
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