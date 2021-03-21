import React, { useState, useEffect, useContext } from 'react'
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function AddPlacePopup(props) {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function changeName(e) {
        setName(e.target.value);
    }

    function changeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onAddPlace({
            name,
            link,
        });
    }
    return (
        <PopupWithForm
            onSubmit={handleSubmit}
            isOpen={props.isOpen}
            onClose={props.onClose}
            name='add-card-form'
            title='Новое место'
            textButton='Создать'>
            <input defaultValue={''} type="text" className="popup__input" name="name" id="place-name" placeholder="Название" required minLength="2" maxLength="30" onChange={changeName} />
            <span id="place-name-error" className="error"></span>
            <input defaultValue={''} type="url" className="popup__input" name="link" id="image-link" placeholder="Ссылка на картинку" required onChange={changeLink} />
            <span id="image-link-error" className="error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;
