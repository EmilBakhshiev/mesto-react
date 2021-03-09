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
    const [selectedCard, setSelectedCard] = useState({name:'', link:''});

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
        setSelectedCard({name:'', link:''});
    }
    function handleCardClick(Card){
        setSelectedCard(Card);
        console.log(Card)
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick} 
               />
            <ImagePopup 
            card = {selectedCard}
            onClose ={closeAllPopups} />
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

        </div>
    );
}

export default App;
