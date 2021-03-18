import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `${isOwn ? 'galery__card-remove' : ''}`
    );
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `galery__card-like ${isLiked ? 'galery__card-like_active' : ''}`; 

    function handleClick() {
        props.onCardClick({ name: props.card.name, link: props.card.link });
    }
    return (
        <div className="galery__card">
            <img src={props.card.link} alt={props.card.name} className="galery__card-image" onClick={handleClick} />
            <button className={cardDeleteButtonClassName} onClick={props.onRemoveCard}></button>
            <div className="galery__card-wrapper">
                <h2 className="galery__card-title">{props.card.name}</h2>
                <div className="galery__card-like-wrapper">
                    <button className={cardLikeButtonClassName} type="button"></button>
                    <p className="galery__card-like-number">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;