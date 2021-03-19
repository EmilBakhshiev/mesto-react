import React, { useState } from 'react'
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup(props) {

    const [name, setName] = useState('');

    function changeName(e) {
        setName(e.target.value);
    }
    
    return (
        <PopupWithForm
        isOpen={props.isOpen}
        onClose ={props.onClose}
        name='edit-profile-form'
        title='Редактирование профиля'
        textButton='Сохранить'>
        <input type="text" className="popup__input" name="name" id="name" required minLength="2" maxLength="40" onChange={changeName} />
        <span id="name-error" className="error"></span>
        <input type="text" className="popup__input" name="about" id="about-me" required minLength="2" maxLength="200" />
        <span id="about-me-error" className="error"></span>
    </PopupWithForm>
    )
}

export default EditProfilePopup
