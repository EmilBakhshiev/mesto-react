import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from '../utils/api';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    //const [isDeletePopup, setIsDeletePopup] = useState(false);
    const [selectedCard, setSelectedCard] = useState({name:'', link:''});
    const [currentUser, setCurrentUser] = useState('');


    useEffect(() => {
        api.getProfileInfo()
        .then((res) => {
            setCurrentUser(res)
        })
        .catch((err)=>{
            console.error(err);
        });
    },[])

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    /*
    function handleDeleteCard(){
        setIsDeletePopup(true);
    }*/

    function closeAllPopups(){
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        //setIsDeletePopup(false);
        setSelectedCard({name:'', link:''});
    }
    function handleCardClick(Card){
        setSelectedCard(Card);
    }

    return (
        
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
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
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} /> 
            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                onClose ={closeAllPopups}
                name='avatar-form'
                title='Обновить аватар'
                textButton='Сохранить'>
                <input type="url" className="popup__input" name="link" id="avatar-link" placeholder="Название" required />
                <span id="avatar-link-error" className="error"></span>
            </PopupWithForm>
            <PopupWithForm
             isOpen={isAddPlacePopupOpen}
             onClose ={closeAllPopups}
              name='add-card-form'
               title='Новое место'
               textButton='Создать'>
                <input type="text" className="popup__input" name="name" id="place-name" placeholder="Название" required minLength="2" maxLength="30" />
                <span id="place-name-error" className="error"></span>
                <input type="url" className="popup__input" name="link" id="image-link" placeholder="Ссылка на картинку" required />
                <span id="image-link-error" className="error"></span>
            </PopupWithForm>
            {/*<PopupWithForm
            isOpen={isDeletePopup}
            onClose ={closeAllPopups}
            name='delete-card-form'
            title='Вы уверены?'
            textButton='Да'/>*/}
            <Footer />
            </CurrentUserContext.Provider>
        </div>

    );
}

export default App;
