import React from 'react';
import '../index.css';

function PopupWithForm(props){
return(
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
    <form className={`popup__container`} name={props.name} noValidate>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button className="popup__save-button popup__button" type="submit">Сохранить</button>
        <button className="popup__close-button" type="button" id="close-edit-popup" onClick={props.onClose}/>
    </form>
</div>
)
}

export default PopupWithForm;