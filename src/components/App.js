import React, { useState } from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState([]);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups(){
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard([]);
    }
    function handleCardClick(){
        setSelectedCard();
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
               />
               
            <PopupWithForm
                isOpen={isEditProfilePopupOpen}
                onClose ={closeAllPopups}
                name='edit-profile-form'
                title='Редактирование профиля'>
                <input type="text" className="popup__input" name="name" id="name" required minLength="2" maxLength="40" />
                <span id="name-error" className="error"></span>
                <input type="text" className="popup__input" name="about" id="about-me" required minLength="2" maxLength="200" />
                <span id="about-me-error" className="error"></span>
            </PopupWithForm>
            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                onClose ={closeAllPopups}
                name='avatar-form'
                title='Обновить аватар'>
                <input type="url" className="popup__input" name="link" id="avatar-link" placeholder="Название" required />
                <span id="avatar-link-error" className="error"></span>
            </PopupWithForm>
            <PopupWithForm
             isOpen={isAddPlacePopupOpen}
             onClose ={closeAllPopups}
              name='add-card-form'
               title='Новое место'>
                <input type="text" className="popup__input" name="name" id="place-name" placeholder="Название" required minLength="2" maxLength="30" />
                <span id="place-name-error" className="error"></span>
                <input type="url" className="popup__input" name="link" id="image-link" placeholder="Ссылка на картинку" required />
                <span id="image-link-error" className="error"></span>
            </PopupWithForm>

            <Footer />
            
{/*
            <div className="popup" id="edit-popup">
                <form className="popup__container" name="edit-profile-form" id="edit-profile-form" novalidate>
                    <h2 className="popup__title">Редактирование профиля</h2>
                    <input type="text" className="popup__input" name="name" id="name" required minLength="2" maxLength="40" />
                    <span id="name-error" className="error"></span>
                    <input type="text" className="popup__input" name="about" id="about-me" required minLength="2" maxLength="200" />
                    <span id="about-me-error" className="error"></span>
                    <button className="popup__save-button popup__button" type="submit">Сохранить</button>
                    <button className="popup__close-button" type="button" id="close-edit-popup" />
                </form>
            </div>
            <div className="popup" id="add-card-popup">
                <form className="popup__container" name="add-card-form" id="add-card-form" novalidate>
                    <h2 className="popup__title">Новое место</h2>
                    <input type="text" className="popup__input" name="name" id="place-name" placeholder="Название" required minLength="2" maxLength="30" />
                    <span id="place-name-error" className="error"></span>
                    <input type="url" className="popup__input" name="link" id="image-link" placeholder="Ссылка на картинку" required />
                    <span id="image-link-error" className="error"></span>
                    <button className="popup__button popup__create-button" type="submit">Создать</button>
                    <button className="popup__close-button" type="button" id="close-add-popup"></button>
                </form>
            </div>
            <div className="popup" id="delete-card-popup">
                <form className="popup__container" name="delete-card-form" id="delete-card-form" novalidate>
                    <h2 className="popup__title">Вы уверены?</h2>
                    <button className="popup__button popup__create-button" type="submit">Да</button>
                    <button className="popup__close-button" type="button" id="close-delete-popup"></button>
                </form>
            </div>
            <div className="popup" id="avatar-popup">
                <form className="popup__container" name="avatar-form" id="avatar-form" novalidate>
                    <h2 className="popup__title">Обновить аватар</h2>
                    <input type="url" className="popup__input" name="link" id="avatar-link" placeholder="Название" required />
                    <span id="avatar-link-error" className="error"></span>
                    <button className="popup__button popup__create-button" type="submit">Сохранить</button>
                    <button className="popup__close-button" type="button" id="close-avatar-popup" />
                </form>
            </div>
            <div className="popup popup_theme_dark" id="image-popup">
                <div className="popup__image-container">
                    <figure className="popup__figure">
                        <img src="/" alt="/" className="popup__image" />
                        <figcaption className="popup__caption" />
                    </figure>
                    <button className="popup__close-button" type="button" id="close-image-popup" />
                </div>
            </div>*/}

        </div>
    );
}

export default App;
